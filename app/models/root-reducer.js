import {combineReducers} from 'redux';
import {reducer as characterReducer} from './characters/reducers';

const reducer = combineReducers({
    character: characterReducer
})

export {reducer};