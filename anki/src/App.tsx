import { useContext, useState } from 'react'
import Header from './components/Header'
import StatusBar from './components/StatusBar'
import { ThemeContext } from './context/ThemeContext'

import Deck from './features/deckspace/components/Deck'
import DeckSpace from './features/deckspace/components/DeckSpace'

const App = () => {
    const [theme, ] = useContext(ThemeContext)
    const [deckSelected, setDeckSelected] = useState(false)
    
    const decks = [
        { 'color': '#A183C7', 'name': 'Mandarin' },
        { 'color': '#94A4F5', 'name': 'Linear Algebra I' },
        { 'color': '#FCB778', 'name': 'Math Statistics I' },
        { 'color': '#88FFCD', 'name': 'Linear Algebra II' },
        { 'color': '#F59A94', 'name': 'Calculus' },
        { 'color': '#F594C3', 'name': 'Spanish' },
        { 'color': '#69C578', 'name': 'Philosophy I' },
        { 'color': '#D5DE6C', 'name': 'History I' },
        { 'color': '#87DAE5', 'name': 'Math Statistics II' },
        { 'color': '#A183C7', 'name': 'Mandarin' },
        { 'color': '#94A4F5', 'name': 'Linear Algebra I' },
        { 'color': '#FCB778', 'name': 'Math Statistics I' },
        { 'color': '#88FFCD', 'name': 'Linear Algebra II' },
        { 'color': '#F59A94', 'name': 'Calculus' },
        { 'color': '#F594C3', 'name': 'Spanish' },
        { 'color': '#69C578', 'name': 'Philosophy I' },
        { 'color': '#D5DE6C', 'name': 'History I' },
        { 'color': '#87DAE5', 'name': 'Math Statistics II' },
    ]

    const getDecks = () => {
        const deckComponents = []
        for (let i = 0; i < decks.length; i++) {
            deckComponents.push(
                <Deck color={decks[i]['color']}
                      name={decks[i]['name']}
                      onClick={() => {
                          setDeckSelected(true)
                      }} />
            )
        }
        return deckComponents
    }

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
            <StatusBar status={'your decks'}/>
            <div style={{
                position: 'absolute',
                top: 80,
                bottom: 0,
                width: '100%',
                overflowY: deckSelected ? 'hidden' : 'auto',
                display: 'flex',
                flex: '1 1 auto',
                justifyContent: 'center',
                scrollbarGutter: 'stable both-edges'
            }}>
                <DeckSpace blurred={deckSelected} deblur={() => {
                    setDeckSelected(false)
                }}>
                    {getDecks()}
                </DeckSpace>
            </div>
        </div>
    )
}

export default App
