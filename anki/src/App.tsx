import { useContext } from 'react'
import Header from './components/Header'
import StatusBar from './components/StatusBar'
import { ThemeContext } from './context/ThemeContext'

const App = () => {
    const theme = useContext(ThemeContext)

    return (
        <div id='App' style={{
            width: '100%',
            height: '100%',
            backgroundColor: theme.background,
        }}>
            <Header/>
            <StatusBar status={undefined}/>
        </div>
    )
}

export default App
