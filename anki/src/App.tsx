import { useContext } from 'react'
import Header from './components/Header'
import { ThemeContext } from './context/ThemeContext'

import DeckSpace from './features/deckspace/components/DeckSpace'

const App = () => {
    const [theme, ] = useContext(ThemeContext)

    return (
        <div id='App' style={{
            width: '100%',
            height: '100%',
            backgroundColor: theme.background,
            display: 'flex',
            flexFlow: 'column',
            transition: 'background-color 100ms'
        }}>
            <Header/>

            <DeckSpace/>
        </div>
    )
}

export default App
