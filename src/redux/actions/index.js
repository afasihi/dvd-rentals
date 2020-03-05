import types from "../types";

export const loadData = data => ({
  type: types.LOAD_DATA,
  payload: {
    data
  }
});

export const toggleRent = id => ({
  type: types.TOGGLE_RENT,
  payload: {
    id
  }
})

export const getRentedShows = (shows) => ({
  type:types.RENTED_SHOWS,
  payload: {
    shows
  }
})

export const clearRentedShows = () => ({
  type: types.CLEAR_RENTED_SHOWS
})