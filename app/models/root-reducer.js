import {combineReducers} from 'redux';
import {charactersReducer, characterReducer, characterIdReducer} from './character/reducers';

const reducer = combineReducers({
  characters: charactersReducer,
  character: characterReducer,
  characterId: characterIdReducer
});

export {reducer};