import {put, takeEvery, call} from 'redux-saga/effects';
import {GET_CHARACTERS_INFO_REQUEST, GET_CHARACTERS_INFO_REQUEST_SUCCESS} from './actions';
import {queryAPI} from '../query-api';
import {API_URL} from '../../utils/config/urls'

function* handler() {
    yield takeEvery(GET_CHARACTERS_INFO_REQUEST, getCharactersInfo);
}

function* getCharactersInfo(action) {

    try {
        const getCharacters = yield call(queryAPI, {
            endpoint: '/character',
            method: 'GET',
        })

        // console.log(getCharacters.results[0].id)


        // API call
        yield put({
            type: GET_CHARACTERS_INFO_REQUEST_SUCCESS,
            payload: {
            id: getCharacters.results[0].id,
            name: getCharacters.results[0].name,
            status: getCharacters.results[0].status,
            species: getCharacters.results[0].species,
            gender: getCharacters.results[0].gender,
            image: getCharacters.results[0].gender,
        },
    })

} catch (err) {
    console.log(err.message)
    // Handle error
}
}

export {handler}