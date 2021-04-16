import * as types from "./../constants/ActionsType";
import RandomString from "randomstring";

var data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data ? data : [];
var findIndex = (tasks, id) => {
  var x = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      x = index;
    }
  });
  return x;
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.SAVE_TASK:
      var task = {
        id: action.task.id,
        name: action.task.name,
        status: action.task.status === "true" ? true : false,
      };
      if (!task.id) {
        task.id = RandomString.generate(10);
        state.push(task);
      } else {
        index = findIndex(state, task.id);
        state[index] = task;
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.UPDATE_STATUS:
      var index = findIndex(state, action.id);
      state[index] = {
        ...state[index],
        status: !state[index].status,
      };
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.DELETE_TASK:
      var index = findIndex(state, action.id);
      state.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};
export default myReducer;
