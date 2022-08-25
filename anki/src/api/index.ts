/*\
Global API functions to be here.
\*/

import { UserResponseType } from "types";
import { axios } from "lib/axios";

// Ask the API who the current user is, depending on a token.
const getMe = async (): Promise<UserResponseType> => {
    return axios
        .get('/get-me')
        .then(res => res.data);
};

export { getMe };
