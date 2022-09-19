import { storage } from "./storage";

const logOut = () => {
    storage.clearAccessToken();
    storage.clearRefreshToken();
    storage.clearUsername();
}

export { logOut };
