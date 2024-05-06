export const SET_FILTERS = "SET_FILTERS";
export const RESET_FILTERS = "RESET_FILTERS";

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters,
});

export const resetFilters = () => ({
  type: RESET_FILTERS,
});