import App from './App'
import { ThemeContext, themes } from './context/ThemeContext'

const AppWrapper = () => {
    return (
        <ThemeContext.Provider value={themes.light}>
            <App/>
        </ThemeContext.Provider>
    )
}

export default AppWrapper
