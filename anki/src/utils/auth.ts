import { storage } from "./storage";

const logOut = () => {
    storage.clearAccessToken();
    storage.clearRefreshToken();
}

export { logOut };
