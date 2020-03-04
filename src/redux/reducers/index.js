import { combineReducers } from "redux";
import types from "../types";

const intialState = {
  data: []
};

const rentReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.LOAD_DATA:
      return {
        ...state,
        data: action.data
      };
    case types.TOGGLE_RENT:
      return {
        ...state,
        data: state.data.map(show => {
          if (show.id === action.id) {
            return {
              ...show,
              rented: !show.rented
            }
          } else 
            return show
        })
      };
    default:
      return state;
  }
};

export default combineReducers({
  rent: rentReducer
});
