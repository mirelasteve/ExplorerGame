import auth from './authReducer';
import {combineReducers} from 'redux';
import countries from './countriesReducer';
import missions from './missionReducer';
import questions from './questionReducer';
import user from './userReducer';

const rootReducer = combineReducers({user,countries,missions,questions,auth})
export default rootReducer
