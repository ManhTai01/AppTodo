import * as types from "../constants/ActionsType";

var initialState = "";

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH:
      console.log(action.key);
      return action.key;

    default:
      return state;
  }
};
export default myReducer;
