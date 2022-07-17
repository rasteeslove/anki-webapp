import { axios } from "lib/axios";
import { UserType } from "types";
import { storage } from "./storage";

const getMe = async (): Promise<UserType | string> => {
    return axios
        .get('/get-me')
        .then(res => res.data);
};

const logOut = () => {
    storage.clearAccessToken();
    storage.clearRefreshToken();
}

export { getMe, logOut };
