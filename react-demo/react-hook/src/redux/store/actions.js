const actions = {
    increase: (data) => {
        return {type: 'INCREASE', data}
    },
    decrease: (data) => {
        return {type: 'DECREASE', data}
    },
    addList: (listItem) => {
        return {type: 'ADD_LIST', data: listItem}
    },
    deleteList: () => {
        return {type: 'DELETE_LIST'}
    }
};

export default actions