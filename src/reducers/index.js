import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplay from "./isDisplay";
import itemEditing from "./itemEditing";
import filter from "./filter";
import search from "./search";

const myReducer = combineReducers({
  tasks,
  isDisplay,
  itemEditing,
  filter,
  search,
});
export default myReducer;
