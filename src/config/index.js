import axios from "axios";
import { LOGIN_REQUEST } from "./api/authenAPI";

const host = 'http://10.16.66.177:8080';

export const loginRequest = (params) => {
    let url = host + LOGIN_REQUEST;
    return axios({
        method: 'post',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        data: params
    })
}

