import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplay from "./isDisplay";
import itemEditing from "./itemEditing";
import filter from "./filter";

const myReducer = combineReducers({
  tasks,
  isDisplay,
  itemEditing,
  filter,
});
export default myReducer;
