import { useState } from 'react'
import App from './App'
import { ThemeContext, themes } from './context/ThemeContext'
import storage from './utils/storage'

const AppWrapper = () => {
    const [theme, setTheme] = useState(themes[storage.getTheme()])

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <App/>
        </ThemeContext.Provider>
    )
}

export default AppWrapper
