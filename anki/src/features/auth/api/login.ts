import { axios } from "lib/axios";

import { JwtToken } from '../types';

export type LoginCredsDTO = {
    username: string,
    password: string,
};

export const loginWithUsernameAndPassword = (data: LoginCredsDTO) : Promise<JwtToken> => {
    return axios.post('/api/login', data);
};
