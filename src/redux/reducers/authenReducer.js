import { FETCHINH_DATA, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/authenActions";

const initalState = {
    authen : {},
    isFetching: false,
}

const authenReducer = ( state = initalState, {type, payload}) => {
    switch (type) {
        case FETCHINH_DATA:
            return {...state, isFetching: true}
        case LOGIN_SUCCESS:
            return {...state, authen: payload, isFetching: false}
        case LOGIN_FAIL:
            return {...state, isFetching: false}
        default:
            return state;
    }
}

export default authenReducer;