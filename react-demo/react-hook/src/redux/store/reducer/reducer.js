import {combineReducers} from "redux";
import count from './count';
import list from './list';

const reducer = combineReducers({
   count,
   list
});

export default reducer