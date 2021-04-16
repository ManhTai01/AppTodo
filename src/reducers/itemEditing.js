import * as types from "../constants/ActionsType";

var initialState = {
  id: "",
  name: "",
  status: false,
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_ITEM:
      return action.task;

    default:
      return state;
  }

  return state;
};
export default myReducer;
