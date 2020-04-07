// import axios from 'axios';
import { setAlert } from './alert';
import { GET_HELPEE_LIST, GET_HELPEE_LIST_ERROR } from './types';
import axios from 'axios';

// //get helpee list
export const getHelpeeList = () => async dispatch => {

    try {
        const res = await axios.get('/api/help_profiles/list');

        //console.log('BAZINGA in getHelpeeList --------------------');
        //console.log(res);
        //console.log('BAZINGA in getHelpeeList --------------------');   

        dispatch({
            type: GET_HELPEE_LIST,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: GET_HELPEE_LIST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }

};