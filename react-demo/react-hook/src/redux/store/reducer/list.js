export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_LIST':
            return [
                ...state,
                action.data
            ];
        case 'DELETE_LIST':{
            console.log(state);
            state.pop();
            console.log(state);
            return [...state];
        }
        default:
            return state;
    }
};