import {createStore} from "redux";

import reducer from "./reducer/reducer";
import initialState from './state'

const store = createStore(reducer, initialState);

store.subscribe(() =>
    console.log(store.getState())
);
export default store