import { RESET_FILTERS, SET_FILTERS } from "../actions";

// store/reducers/filterReducer.js
const initialState = {
  jobRole: "",
  minExp: 0,
  companySize: "",
  location: "",
  minBasePay: "",
  companyName: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        ...action.payload,
      };
    case RESET_FILTERS:
      return initialState;
    default:
      return state;
  }
};

export default filterReducer;
