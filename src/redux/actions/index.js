import types from "../types";

export const LoadData = payload => ({
  type: types.LOAD_DATA,
  data: payload
});
