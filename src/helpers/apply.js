export default (state, newState) => {
    return {
        ...state,
        ...newState
    };
};