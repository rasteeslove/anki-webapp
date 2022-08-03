import { axios } from "lib/axios";

import { UserType } from "types";

export type RegisterCredsDTO = {
    username: string,
    email: string,
    password: string,
};

export const signupWithUsernameAndEmailAndPassword = (data: RegisterCredsDTO) : Promise<UserType> => {
    let formData = new FormData();
    formData.append('username', data.username);
    formData.append('email', data.email);
    formData.append('password', data.password);

    return axios
        .post('/signup/', formData,
            { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(res => res.data);
};