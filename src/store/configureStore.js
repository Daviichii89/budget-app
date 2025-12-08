import { createStore, combineReducers, applyMiddleware } from "redux";
import entriesReducer from "../reducers/entries.reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import modalsReducer from "../reducers/modals.reducers";
import createSagaMiddleware from "redux-saga";
import initSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const configureStore = () => {
  const store = createStore(
    combineReducers({ entries: entriesReducer, modals: modalsReducer }),
    composeWithDevTools(applyMiddleware(...middleware))
  );
  initSaga(sagaMiddleware);

  return store;
};

export default configureStore;
