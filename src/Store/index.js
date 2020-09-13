import { createStore, compose } from "redux";
import createSagaMiddleWare from "redux-saga";
import rootReducer from "../Redux/Reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, compose(composeEnhancers()));

const configureStore = () => {
  return store;
};
export let persistor = persistStore(store);

export default configureStore;
