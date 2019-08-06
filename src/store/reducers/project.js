import * as actionTypes from '../actions/project/actionTypes';
import apply from '../../helpers/apply';

const initalState = {
    blogData: null,
    projectsData: null
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PROJECT_BEGIN: return apply(state, { blogData: action.blogData, projectsData: action.projectsData });
        case actionTypes.LOAD_PROJECT_FAILED: return apply(state, { blogData: -1, projectsData: -1 });
        case actionTypes.LOAD_PROJECT_SUCCESS: return apply(state, { blogData: -1, projectsData: -1 });
        default: return state;
    }
};

export default reducer