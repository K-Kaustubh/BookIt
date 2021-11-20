import { combineReducers } from "redux";
import authReducer from "./auth";

//Combining Multiple reducers

const rootReducer = combineReducers({
  user: authReducer,
});

export default rootReducer;
