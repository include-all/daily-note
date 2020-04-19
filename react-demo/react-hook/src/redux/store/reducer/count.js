// import state from "./state";

export default (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE':
            return state + action.data;
        case 'DECREASE':
            return state - action.data;
        default:
            return state;
    }
};