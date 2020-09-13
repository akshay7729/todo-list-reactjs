import { combineReducers } from "redux";
import AddReducer from "./addReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootPersistConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({
  todo: AddReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
