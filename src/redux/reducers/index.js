import { combineReducers } from "redux";
import types from "../types";

const intialState = {
  data: [],
  rentedShows: []
};

const rentReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.LOAD_DATA:
      return {
        ...state,
        data: action.payload.data
      };
    case types.TOGGLE_RENT:
      return {
        ...state,
        data: state.data.map(show => {
          if (show.id === action.payload.id) {
            return {
              ...show,
              rented: !show.rented
            }
          } else 
            return show
        })
      };
      case types.RENTED_SHOWS:
        return {
          ...state,
          rentedShows: action.payload.shows.filter(show => show.rented === true)
        }
    default:
      return state;
  }
};

export default combineReducers({
  rent: rentReducer
});
