import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer} from './app/models/root-reducer';
import {handlerGetAllCharacters as charactersSaga} from './app/models/character/sagas';
import {handlerGetCharacter as characterSaga} from './app/models/character/sagas';
import {handleGetcharacterId as characterIdSaga} from './app/models/character/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(charactersSaga);
sagaMiddleware.run(characterSaga);
sagaMiddleware.run(characterIdSaga);

export {store};