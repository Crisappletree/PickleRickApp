import {GET_ALL_CHARACTER_INFO_REQUEST_SUCCESS, GET_CHARACTER_INFO_REQUEST_SUCCESS} from './actions';

const initialState = {
  characters: [],
  character: []
};

// Get all Characters Reducer
const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTER_INFO_REQUEST_SUCCESS: {
      const {characters} = action.payload;

      return {
        ...state,
        characters
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
        ...state,
        character
      };
    }
    default:
      return state;
  }
};


export {charactersReducer, characterReducer};