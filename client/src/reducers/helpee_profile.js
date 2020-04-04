import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, GET_VOL_LIST } from '../actions/types';

const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {}
}

export default function(state=initialState, action) {

    const { type, payload } = action;

    switch(type) {
        case GET_PROFILE:
            console.log('TADADADADADA in GET_PROFILE of helpp, bazinga');
            return {
                ...state,
                //profile: payload,
                profile: payload.user_profile,
                profiles: payload.vol_profile,
                loading: false
            };
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                loading:false
            }
        case GET_VOL_LIST:
        default:
            return state;

    }
}