const storagePrefix = 'rasteeslove_anki_'

const storage = {
    getTheme: () : string => {
        const theme = window.localStorage.getItem(`${storagePrefix}theme`) ?? 'light'
        return theme
    },
    setTheme: (theme: string) => {
        window.localStorage.setItem(`${storagePrefix}theme`, theme)
    }
    // todo: add token support for auth
}

export default storage
