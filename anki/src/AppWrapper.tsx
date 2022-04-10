import { useState } from 'react'
import App from './App'
import { ThemeContext, themes } from './context/ThemeContext'
import { MinimalismContext } from './context/MinimalismContext'
import storage from './utils/storage'

const AppWrapper = () => {
    const [theme, setTheme] = useState(themes[storage.getTheme()])

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <MinimalismContext.Provider value={false}>
                <App/>
            </MinimalismContext.Provider>
        </ThemeContext.Provider>
    )
}

export default AppWrapper
