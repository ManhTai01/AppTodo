import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplay from'./isDisplay';


const myReducer = combineReducers({
    tasks,
    isDisplay,
});
export default myReducer;