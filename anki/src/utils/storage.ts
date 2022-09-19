const storagePrefix = 'rasteeslove_anki_';

const storage = {
    getTheme: () : string => {
        return window.localStorage.getItem(`${storagePrefix}theme`) ?? 'light';
    },
    setTheme: (theme: string) => {
        window.localStorage.setItem(`${storagePrefix}theme`, theme);
    },
    getAccessToken: () : string | null => {
        return window.localStorage.getItem(`${storagePrefix}access_token`);
    },
    setAccessToken: (token: string) => {
        window.localStorage.setItem(`${storagePrefix}access_token`, token);
    },
    clearAccessToken: () => {
        window.localStorage.removeItem(`${storagePrefix}access_token`);
    },
    getRefreshToken: () : string | null => {
        return  window.localStorage.getItem(`${storagePrefix}refresh_token`);
    },
    setRefreshToken: (token: string) => {
        window.localStorage.setItem(`${storagePrefix}refresh_token`, token);
    },
    clearRefreshToken: () => {
        window.localStorage.removeItem(`${storagePrefix}refresh_token`);
    },
    getUsername: (): string | null => {
        return window.localStorage.getItem(`${storagePrefix}username`);
    },
    setUsername: (username: string) => {
        window.localStorage.setItem(`${storagePrefix}username`, username);
    },
    clearUsername: () => {
        window.localStorage.removeItem(`${storagePrefix}username`);
    },
};

export { storage };
