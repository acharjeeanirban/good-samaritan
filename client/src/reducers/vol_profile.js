import { VOL_GET_PROFILE, VOL_PROFILE_ERROR, VOL_CLEAR_PROFILE} from '../actions/types';

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
            }
        default:
            return state;

    }
}