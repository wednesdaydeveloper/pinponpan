import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducer from './reducer';
import rootSaga from './Saga';
import calling from './middlewares/calling';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

export default createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger, calling)
);

sagaMiddleware.run(rootSaga);
