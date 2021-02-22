import {combineReducers} from 'redux';
import {charactersReducer, characterReducer, characterIdReducer, moreCharactersReducer} from './character/reducers';

const reducer = combineReducers({
  characters: charactersReducer,
  // characters: moreCharactersReducer,
  character: characterReducer,
  characterId: characterIdReducer,

});

export {reducer};