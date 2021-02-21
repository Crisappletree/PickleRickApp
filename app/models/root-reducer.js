import {combineReducers} from 'redux';
import {charactersReducer, characterReducer} from './character/reducers';

const reducer = combineReducers({
  characters: charactersReducer,
  character: characterReducer
});

export {reducer};