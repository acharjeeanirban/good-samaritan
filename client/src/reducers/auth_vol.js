import {    
    REGISTERVOL_SUCCESS,
    REGISTERVOL_FAIL,
    VOL_LOADED,
    AUTHVOL_ERROR,
    LOGINVOL_SUCCESS,
    LOGINVOL_FAIL,
    LOGOUTVOL
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
    case REGISTERVOL_SUCCESS:
    case LOGINVOL_SUCCESS:
        localStorage.setItem('token', payload.token);
        return {
            ...state,
            ...payload,
            isAuthenticated: true,
            loading: false
        };
    case REGISTERVOL_FAIL:
    case AUTHVOL_ERROR:
    case LOGINVOL_FAIL:
    case LOGOUTVOL:    
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
