import { combineReducers } from "redux";
import authReducer from "./auth";

//Combining Multiple reducers

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
