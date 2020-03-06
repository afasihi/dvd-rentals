import types from "../types";

export const loadData = shows => ({
  type: types.LOAD_DATA,
  payload: {
    shows
  }
});

export const toggleRent = id => ({
  type: types.TOGGLE_RENT,
  payload: {
    id
  }
});

export const clearRentedShows = () => ({
  type: types.CLEAR_RENTED_SHOWS
});
