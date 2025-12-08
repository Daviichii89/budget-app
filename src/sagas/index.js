// import * as testSaga from "./testSaga";
import * as entriesSaga from "./entriesSaga";

function initSaga(sagaMiddleware) {
  //   Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}

export default initSaga;
