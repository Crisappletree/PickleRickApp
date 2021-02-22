import {takeEvery, put, call, select} from 'redux-saga/effects';
import {
  GET_ALL_CHARACTER_INFO_REQUEST,
  GET_ALL_CHARACTER_INFO_REQUEST_SUCCESS,
  GET_CHARACTER_ID,
  GET_CHARACTER_INFO_REQUEST,
  GET_CHARACTER_INFO_REQUEST_SUCCESS,
} from './actions';

import { getCharacterId, infoURL} from '../../utils/selectors'
import {API_URL} from '../../utils/config/urls'


// handle get all characters
function* handlerGetAllCharacters() {
  yield takeEvery(GET_ALL_CHARACTER_INFO_REQUEST, getAllCharacterInfo);
}

// Getting all characters
function* getAllCharacterInfo(action) {
  try {

    const nextPageURL = yield select(infoURL)
    // API call
    const getCharacters = yield fetch(nextPageURL, {
        method: 'GET',
      })
      .then((response) => response.json())
              .then(data => {
                  return data
              })
    yield put({
      type: GET_ALL_CHARACTER_INFO_REQUEST_SUCCESS,
      payload: {
        characters: getCharacters.results,
        info: getCharacters.info.next
      },
    });
  } catch (err) {
    console.log(err);
    // Handle error
  }
}

// Setting character ID from characters view
function* handleGetcharacterId() {
  const id = GET_CHARACTER_ID.payload
  yield put({
    type: GET_CHARACTER_ID,
    payload: {
      characterId: id
    }
  })
}

// Handle get One Character
function* handlerGetCharacter() {
  yield takeEvery(GET_CHARACTER_INFO_REQUEST, getCharacterInfo);
}

function* getCharacterInfo(action) {
  try {
    const id = yield select(getCharacterId)
    const getCharacterURL = API_URL + `/character/${id}`
    const getCharacter = yield fetch(getCharacterURL, {
      method: 'GET',
    })
    .then((response) => response.json())
            .then(data => {
                return data
            })
            
    // API call
    yield put({
      type: GET_CHARACTER_INFO_REQUEST_SUCCESS,
      payload: {
        character: getCharacter
      },
    });
  } catch (err) {
    console.log(err);
    // Handle error
  }
}

export {handlerGetAllCharacters, handlerGetCharacter, handleGetcharacterId};