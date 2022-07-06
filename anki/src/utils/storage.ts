const storagePrefix = 'rasteeslove_anki_';

const storage = {
    getTheme: () : string => {
        const theme = window.localStorage.getItem(`${storagePrefix}theme`) ?? 'light';
        return theme;
    },
    setTheme: (theme: string) => {
        window.localStorage.setItem(`${storagePrefix}theme`, theme);
    },
    getAccessToken: () : string | null => {
        const token = window.localStorage.getItem(`${storagePrefix}access_token`);
        return token;
    },
    setAccessToken: (token: string) => {
        window.localStorage.setItem(`${storagePrefix}access_token`, token);
    },
    clearAccessToken: () => {
        window.localStorage.removeItem(`${storagePrefix}access_token`);
    },
    getRefreshToken: () : string | null => {
        const token = window.localStorage.getItem(`${storagePrefix}refresh_token`);
        return token;
    },
    setRefreshToken: (token: string) => {
        window.localStorage.setItem(`${storagePrefix}refresh_token`, token);
    },
    clearRefreshToken: () => {
        window.localStorage.removeItem(`${storagePrefix}refresh_token`);
    },
};

export { storage };
