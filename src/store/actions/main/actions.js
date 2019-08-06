import * as actionTypes from './actionTypes';
import request from '../../../helpers/request';
import { get, set } from '../../../helpers/cache';

export const loadData = () => {
    return async dispatch => {
        const data = get('navigation', ['blogData', 'projectsData']);
        if (data) {
            dispatch(dataLoaded(data.blogData, data.projectsData));
            return;
        }
        let response = await request('', { type: 'all' });
        if (!response.success) {
            dispatch(dataFailed());
        } else {
            if (response.blogData && response.projectsData) {
                delete response['success'];
                set('navigation', response);
                dispatch(dataLoaded(response.blogData, response.projectsData));
            } else {
                dispatch(dataFailed());
            }
        }
    };
};

const dataLoaded = (blogData, projectsData) => {
    return {
        type: actionTypes.DATA_LOADED,
        blogData,
        projectsData
    };
};

const dataFailed = () => {
    return {
        type: actionTypes.DATA_FAILED,
    };
};