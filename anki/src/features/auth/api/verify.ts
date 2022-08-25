import { axios } from "lib/axios";

import { ResponseType } from 'types';

export const verifyEmailWithCode = (code: string) : Promise<ResponseType> => {
    return axios
        .get('/signup-verify', {
            params: { code },
        }).then(res => res.data);
};
