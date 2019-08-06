import { get, set, remove } from './cache';
//import request from './request'; switch to backend api

const generateID = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; ++i) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

export const logError = (error) => {

};

export const setup = () => {
    const id = get('id', ['value']);
    if (!id) {
        set('id', { value: generateID(12) }, true);
    }
};

export const pageVisit = (path) => {
    let analytics = get('analytics', ['data']);
    if (analytics) {
        analytics.data[path] = (analytics.data[path] || 0) + 1;
    } else {
        analytics = {
            data: { [path]: 1 }
        };
    }
    set('analytics', analytics);
};

export const invalidPage = (path) => {
    let errors = get('invalid', ['paths']);
    if (errors) {
        if (path in errors.paths) {
            return;
        }
        errors.paths[path] = true;
    } else {
        errors = {
            paths: {
                [path]: true
            }
        };
    }
    set('invalid', errors);
};

export const submit = async () => {
    const analytics = get('analytics', ['data']);
    const errors = get('invalid', ['paths']);
    const userID = get('id', ['value']) || 'unknown';
    if (errors && analytics) {
        const sum = Object.keys(errors.paths).reduce((previous, current) => {
            const number = analytics.data[current];
            delete analytics.data[current];
            return previous + (number || 1);
        }, 0);
        analytics.data['invalid'] = sum;
    }
    if (analytics) {
        console.log({ id: userID.value, analytics }); //finish analytics
    }
    remove('invalid');
    remove('analytics');
};