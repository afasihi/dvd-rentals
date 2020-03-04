import types from "../types";

export const loadData = payload => ({
  type: types.LOAD_DATA,
  data: payload
});

export const toggleRent = id => ({
  type: types.TOGGLE_RENT,
  id
})