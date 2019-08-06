import { api } from '../config';

export default async (endpoint, params = null) => {
    let response = {};
    let success = true;
    try {
        let urlParams = '';
        if (params) {
            urlParams = Object.keys(params).reduce((previous, current) => {
                return `${previous}${previous === '?' ? '' : '&'}${current}=${params[current]}`;
            }, '?');
        }
        response = await fetch(`${api}/${endpoint}${urlParams}`);
        response = await response.json();
    } catch (error) {
        success = false;
    } finally {
        return { success, ...response };
    }
};