import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer} from './app/models/root-reducer';
import {handler as characterSaga} from './app/models/characters/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(characterSaga);

export {store}