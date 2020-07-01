import { createStore,compose, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import reducers from '../reducer';
import rootSaga from '../sagas';

const sagaMiddleWare = createSagaMiddleWare();
const middleWare = applyMiddleware(sagaMiddleWare);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(middleWare));
sagaMiddleWare.run(rootSaga);

export default store;