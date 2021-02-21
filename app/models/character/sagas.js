import {takeEvery, put, call} from 'redux-saga/effects';
import {
  GET_ALL_CHARACTER_INFO_REQUEST,
  GET_ALL_CHARACTER_INFO_REQUEST_SUCCESS,
  GET_CHARACTER_INFO_REQUEST,
  GET_CHARACTER_INFO_REQUEST_SUCCESS,
} from './actions';
import {queryApi} from '../query-api';



// handle get all characters
function* handlerGetAllCharacters() {
  yield takeEvery(GET_ALL_CHARACTER_INFO_REQUEST, getAllCharacterInfo);
}

// Getting all characters
function* getAllCharacterInfo(action) {
  try {
    const posts = yield call(queryApi, {
      endpoint: '/character',
      method: 'GET',
    });

    // API call
    yield put({
      type: GET_ALL_CHARACTER_INFO_REQUEST_SUCCESS,
      payload: {
        characters: posts.results
      },
    });
  } catch (err) {
    console.log(err);
    // Handle error
  }
}

function* handlerGetCharacter() {
  yield takeEvery(GET_CHARACTER_INFO_REQUEST, getCharacterInfo);
}

function* getCharacterInfo(action) {
  try {
    const getCharacter = yield call(queryApi, {
      // TODO Replace /2 by id when allowed
      endpoint: `/character/2`,
      method: 'GET',
    });

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

export {handlerGetAllCharacters, handlerGetCharacter};