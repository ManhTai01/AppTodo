import * as types from "../constants/ActionsType";

var initialState = {
  name: "",
  status: -1,
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER:
      return {
        name: action.filter.name,
        status: action.filter.status,
      };

    default:
      return state;
  }
};
export default myReducer;
