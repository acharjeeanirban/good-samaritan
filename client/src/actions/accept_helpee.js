// import axios from 'axios';
import { setAlert } from './alert';
import { ACCEPT_HELPEE_LIST, ACCEPT_HELPEE_LIST_ERROR } from './types';
import axios from 'axios';

// //get helpee list
export const acceptHelpee = (helpee_id) => async dispatch => {
    //call /api/help_profiles/list/:help_id
    try {
        const url = '/api/help_profiles/list/' + helpee_id;
        console.log("THE URL : " + url);
        const res = await axios.get(url);  

        dispatch({
            type: ACCEPT_HELPEE_LIST,
            payload: res.data
        });

    } catch (err) {
        console.log(err);
        dispatch({
            type: ACCEPT_HELPEE_LIST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }

};