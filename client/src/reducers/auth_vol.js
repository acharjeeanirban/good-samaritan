import {    
    VOL_REGISTER_SUCCESS,
    VOL_REGISTER_FAIL,
    VOL_LOADED,
    VOL_AUTH_ERROR,
    VOL_LOGIN_SUCCESS,
    VOL_LOGIN_FAIL,
    VOL_LOGOUT
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: null,
    user: null
}

export default function(state = initialState, action) {

    const { type, payload } = action;
    switch(type) {
    case VOL_LOADED:
        return {
            ...state,
            isAuthenticated: true,
            loading: false,
            user: payload
        };
    case VOL_REGISTER_SUCCESS:
    case VOL_LOGIN_SUCCESS:
        console.log('IN REDUCER');
        localStorage.setItem('token', payload.token);
        return {
            ...state,
            ...payload,
            isAuthenticated: true,
            loading: false
        };
    case VOL_REGISTER_FAIL:
    case VOL_AUTH_ERROR:
    case VOL_LOGIN_FAIL:
    case VOL_LOGOUT:    
        localStorage.removeItem('token');
        return {
            ...state,
            token: null,
            isAuthenticated: false,
            loading: false
        };
    default:
        return state;

    }
}
