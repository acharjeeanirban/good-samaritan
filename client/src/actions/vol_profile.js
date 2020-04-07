import axios from 'axios';
import { setAlert } from './alert';
import { VOL_GET_PROFILE, VOL_PROFILE_ERROR } from './types';

//get current user profile
export const getCurrentVolProfile = () => async dispatch => {

    try {
        //console.log('QQQQQQQQQQQQQQQQQQQQQQQQQ');
        const res = await axios.get('/api/vol_profiles/me');

        dispatch({
            type: VOL_GET_PROFILE,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: VOL_PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }

};

// create or update a profile
export const createVolProfile = (formData, history, edit=false) => async dispatch => {

    try {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        };
        const res = await axios.post('/api/vol_profiles', formData, config);

        //call reducer
        dispatch({
            type: VOL_GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Profile update' : 'Profile created'));

        if (!edit) {
            history.push('/vol_dashboard');
        }
    } catch (err) {
        
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: VOL_PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}
