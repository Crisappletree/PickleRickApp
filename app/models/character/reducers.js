import {
  GET_ALL_CHARACTER_INFO_REQUEST_SUCCESS,
  GET_CHARACTER_INFO_REQUEST_SUCCESS,
  GET_CHARACTER_ID,
} from './actions';

const initialState = {
  characters: [],
  characterId: {},
  character: {},
};


// Get all Characters Reducer
const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTER_INFO_REQUEST_SUCCESS: {
      const {characters} = action.payload;

      return {
        characters,
      };
    }
    default:
      return state;
  }
};

const characterIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER_ID: {
      const {characterId} = action.payload;
      return {
        characterId,
      };
    }
    default:
      return state;
    }
  };

// get one character by id reducer
const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER_INFO_REQUEST_SUCCESS: {
      const {character} = action.payload;

      return {
        character,
      };
    }
    default:
      return state;
  }
};

export {charactersReducer, characterReducer, characterIdReducer};
