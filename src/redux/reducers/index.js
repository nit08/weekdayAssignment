import { combineReducers } from "redux";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  filters: filterReducer,
});

export default rootReducer;
