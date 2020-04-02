import { VOL_GET_PROFILE, VOL_PROFILE_ERROR, VOL_CLEAR_PROFILE, GET_HELPEE_LIST } from '../actions/types';

const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {}
}

export default function(state=initialState, action) {

    const { type, payload } = action;

    switch(type) {
        case VOL_GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            };
        case VOL_PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case VOL_CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                loading:false
            };
        case GET_HELPEE_LIST:
            console.log('I AM ANIRBAN : skdjgfasdgfkagsdkfjhskdjf');
            console.log(payload);
            return {
                ...state,
                profile: payload.vol_profile,
                profiles: payload.user_profiles,
                loading: false
            }
        default:
            return state;

    }
}