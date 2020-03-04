import { combineReducers } from "redux";
import types from "../types"

const intialState = {
  rented: false,
  data: []
};

const rentReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.LOAD_DATA: 
    return {
      ...state,
      data: action.data
    }
    default:
      return state;
  }
};

export default combineReducers({
  rent: rentReducer
});
