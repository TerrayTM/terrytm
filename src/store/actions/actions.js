import * as actionTypes from './actionTypes';

const checkSum = value => {
    let check = 0;
    for (let i = 0; i < value.length; ++i) {
        check = (check + value.charCodeAt(i) * (i % 2 === 0 ? 3 : 2)) % 60;
    }
    return check;
}

export const loadData = () => {
    return async dispatch => {
        const expiry = localStorage.getItem('expiry');
        if (expiry && new Date(expiry) > new Date()) {
            let data = localStorage.getItem('navigation');
            if (data) {
                try {
                    data = data.split('|');
                    if (data.length !== 2) {
                        localStorage.clear();
                    } else {
                        if (checkSum(data[0]) !== parseInt(data[1])) {
                            localStorage.clear();
                        } else {
                            data = data[0];
                            data = JSON.parse(atob(data));
                            dispatch(dataLoaded(data.blogData, data.projectsData));
                            return;
                        }
                    }
                }
                catch (error) {
                    localStorage.clear();
                }
            }
        }
        try {
            let response = await fetch('***type=all');
            response = await response.json();
            if (response.blogData && response.projectsData) {
                const encoded = btoa(JSON.stringify(response));
                localStorage.setItem('navigation', encoded + '|' + checkSum(encoded));
                localStorage.setItem('expiry', new Date(new Date().getTime() + 86400000));
                dispatch(dataLoaded(response.blogData, response.projectsData));
            } else {
                dispatch(dataFailed());
            }
        } catch (error) {
            dispatch(dataFailed());
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