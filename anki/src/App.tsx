import { useContext } from 'react'
import Header from './components/Header'
import StatusBar from './components/StatusBar'
import { ThemeContext, themes } from './context/ThemeContext'
import storage from './utils/storage'

import ButtonSwitch from './components/ButtonSwitch'


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
                <div className='shadow-out-bottom' style={{
                    width: 400,
                    height: 200,
                    backgroundColor: theme.foreground,
                    borderRadius: 20,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 20,
                }}>
                    <ButtonSwitch width={80} height={40} is_on={theme === themes.light} text={'light'} onClick={() => {
                        storage.setTheme(theme === themes.light ? 'dark': 'light')
                        setTheme(theme === themes.light ? themes.dark : themes.light)
                    }}/>
                    <ButtonSwitch width={80} height={40} is_on={theme === themes.dark} text={'dark'} onClick={() => {
                        storage.setTheme(theme === themes.light ? 'dark': 'light')
                        setTheme(theme === themes.light ? themes.dark : themes.light)
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default App
