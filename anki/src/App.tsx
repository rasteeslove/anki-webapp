import { useContext } from 'react'
import Header from './components/Header'
import StatusBar from './components/StatusBar'
import { ThemeContext, themes } from './context/ThemeContext'

const App = () => {
    const [theme, setTheme] = useContext(ThemeContext)

    return (
        <div id='App' style={{
            width: '100%',
            height: '100%',
            backgroundColor: theme.background,
            display: 'flex',
            flexFlow: 'column',
        }}>
            <Header/>
            <StatusBar status={undefined}/>
            <div style={{
                width: '100%',
                display: 'flex',
                flex: '1 1 auto',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <button onClick={() => {
                    setTheme(theme == themes.light ? themes.dark : themes.light)
                }}>change theme</button>
            </div>
        </div>
    )
}

export default App
