/*\
Global API functions to be here.
\*/

import { UserType } from "types";
import { axios } from "lib/axios";

// Ask the API who the current user is, depending on a token.
// If not logged in, the response is an empty string.  todo maybe change that
const getMe = async (): Promise<UserType | string> => {
    return axios
        .get('/get-me')
        .then(res => res.data);
};

export { getMe };
