import axios from 'axios';
import { VOL_REGISTER_SUCCESS, VOL_AUTH_ERROR, VOL_LOADED, VOL_REGISTER_FAIL, VOL_LOGIN_SUCCESS, VOL_LOGIN_FAIL, VOL_CLEAR_PROFILE, VOL_LOGOUT}
 from './types';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

// Load vol
export const loadVol = () => async dispatch => {

    if (localStorage.token) {
        console.log(" token found");
        setAuthToken(localStorage.token);
    } else {
        console.log(" token not found");
    }

    try {
        console.log('QQQ 1');
        const res = await axios.get('/api/auth/vol');
        console.log('QQQ 2');

        dispatch({
            type: VOL_LOADED,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: VOL_AUTH_ERROR
        });
    }

}

//Register vol
export const registerVol = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password });

    try {
        const res = await axios.post('/api/vol_users/register', body, config);
        dispatch({
            type: VOL_REGISTER_SUCCESS,
            payload: res.data
        });

        dispatch(loadVol());

    } catch (err) {
        
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: VOL_REGISTER_FAIL
        });
    }
};

// LOGIN vol
export const loginVol = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        console.log('-~~~~~~~~~~~~~ BAZINGA')
        const res = await axios.post('/api/auth/vol', body, config);
        console.log(res.data);
        console.log('Login successful');
        dispatch({
            type: VOL_LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadVol());

    } catch (err) {
        console.log('bazinga');
        console.log(err)
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: VOL_LOGIN_FAIL
        });
    }
};

//LOGOUT
export const logoutVol = () => dispatch => {
    dispatch({ type: VOL_CLEAR_PROFILE });
    dispatch({ type: VOL_LOGOUT });
};

