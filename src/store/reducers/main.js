import * as actionTypes from '../actions/main/actionTypes';
import apply from '../../helpers/apply';

const initalState = {
    blogData: null,
    projectsData: null
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.DATA_LOADED: return apply(state, { blogData: action.blogData, projectsData: action.projectsData });
        case actionTypes.DATA_FAILED: return apply(state, { blogData: -1, projectsData: -1 });
        default: return state;
    }
};

export default reducer