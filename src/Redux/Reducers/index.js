import { combineReducers } from "redux";
import AddReducer from "./addReducer";

const rootReducer = combineReducers({
  todo: AddReducer,
});

export default rootReducer;
