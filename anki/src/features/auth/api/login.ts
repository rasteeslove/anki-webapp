import { axios } from "lib/axios";

import { JwtToken } from '../types';

export type LoginCredsDTO = {
    username: string,
    password: string,
};

export const loginWithUsernameAndPassword = (data: LoginCredsDTO) : Promise<JwtToken> => {
    let formData = new FormData();
    formData.append('username', data.username);
    formData.append('password', data.password);

    return axios
        .post('/token/', formData,
              { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(res => res.data);
};
