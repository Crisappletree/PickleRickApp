import { call, put, select } from 'redux-saga/effects';

// API URL for fetch data
import {API_URL} from '../utils/config/urls'


function* queryAPI({endpoint, method, body = null}) {
    const state = yield select();
    const res = yield call(makeRequest, {
        endpoint,
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...body
        })
    })

    const parsedResponse = yield call(parseResponse, res);
    if (!res.ok) {
        // handle bad response
    }
    return parsedResponse
}

const makeRequest = async ({endpoint, method, headers, body = null}) => {
    return fetch(API_URL + endpoint, {
        method,
        headers,
        body: body === '{}' ? undefined : body
    })
}

const parseResponse = async response => {
    let parsedResponse;

    try {
        parsedResponse = await response.json();
    } catch (err) {
        console.log(err)
    }

    return parsedResponse
}

export {queryAPI}