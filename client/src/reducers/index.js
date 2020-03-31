import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import helpee_profile from './helpee_profile';

export default combineReducers({
    alert,
    auth,
    helpee_profile
});