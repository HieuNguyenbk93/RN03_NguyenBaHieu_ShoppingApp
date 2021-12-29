import { loginRequest } from "../../config";
import { loginSuccess, loginFail, getRequest } from "../actions/authenActions";

export const getRequestLogin = authen => {
    console.log('thunk param:', authen);
    return dispatch => {
        dispatch(getRequest);
        loginRequest(authen).then(res => {
            console.log(res);
            const data = res.data;
            dispatch(loginSuccess(data));
        }).catch(error => {
            dispatch(loginFail());
            console.log(error);
        })
    }
}