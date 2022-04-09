import { useState } from 'react'
import App from './App'
import { ThemeContext, themes } from './context/ThemeContext'

const AppWrapper = () => {
    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <App/>
        </ThemeContext.Provider>
    )
}

export default AppWrapper
