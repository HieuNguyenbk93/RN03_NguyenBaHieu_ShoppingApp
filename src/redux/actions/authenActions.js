export const FETCHINH_DATA = 'FETCHING_DATA';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const getRequest = () => ({type: FETCHINH_DATA});

export const loginSuccess = userInfor => ({
    type: LOGIN_SUCCESS,
    payload: userInfor,
});

export const loginFail = () => ({type: LOGIN_FAIL});