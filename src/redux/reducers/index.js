import { combineReducers } from "redux";
import types from "../types";

const intialState = {
  shows: []
};

const rentReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.LOAD_DATA:
      return {
        ...state,
        shows: action.payload.shows
      };
    case types.TOGGLE_RENT:
      return {
        ...state,
        shows: state.shows.map(show => {
          if (show.id === action.payload.id) {
            return {
              ...show,
              rented: !show.rented
            };
          } else return show;
        })
      };
    case types.CLEAR_RENTED_SHOWS:
      return {
        ...state,
        shows: state.shows.map(show => {
          return {
            ...show,
            rented: false
          };
        })
      };
    default:
      return state;
  }
};

export default combineReducers({
  rent: rentReducer
});
