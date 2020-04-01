import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import auth_vol from './auth';
import helpee_profile from './helpee_profile';

export default combineReducers({
    alert,
    auth,
    auth_vol,
    helpee_profile
});