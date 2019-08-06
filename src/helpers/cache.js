import { cacheLife } from '../config';

const checkSum = (value) => {
    let check = 0;
    for (let i = 0; i < value.length; ++i) {
        check = (check + value.charCodeAt(i) * (i % 2 === 0 ? 3 : 2)) % 60;
    }
    return check;
};

export const get = (name, validation = null) => {
    if (localStorage) {
        let data = localStorage.getItem(name);
        if (!data) {
            return null;
        }
        try {
            data = data.split('|');
            if (data.length !== 2) {
                throw new Error();
            }
            if (checkSum(data[0]) !== parseInt(data[1])) {
                throw new Error();
            } else {
                data = data[0];
                data = JSON.parse(atob(data));
                const expiryTime = new Date();
                expiryTime.setTime(data.expiry);
                if (!data.expiry || expiryTime < new Date()) {
                    throw new Error();
                }
                data = data.data;
                if (validation && !validation.every(property => property in data)) {
                    throw new Error();
                }
            }
        }
        catch (error) {
            data = null;
            localStorage.removeItem(name);
        } finally {
            return data;
        }
    } else {
        return null;
    }
};

export const set = (name, data, infiniteLife = false) => {
    if (!localStorage) {
        return;
    }
    const life = infiniteLife ? 4.32e+7 : cacheLife;
    data = { data, expiry: new Date(new Date().getTime() + life).getTime() };
    let item = btoa(JSON.stringify(data));
    localStorage.setItem(name, `${item}|${checkSum(item)}`);
};

export const clear = () => {
    if (localStorage) {
        localStorage.clear();
    }
};

export const remove = (name) => {
    if (localStorage) {
        localStorage.removeItem(name);
    }
};