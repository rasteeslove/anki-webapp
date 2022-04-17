import { useContext, useState, useEffect } from 'react'
import Header from './components/Header'
import StatusBar from './components/StatusBar'
import { ThemeContext } from './context/ThemeContext'

import Deck from './features/deckspace/components/Deck'
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
            <StatusBar status={undefined}/>
            <div style={{
                width: '100%',
                overflowY: 'auto',
                display: 'flex',
                flex: '1 1 auto',
                justifyContent: 'center',
            }}>
                <DeckSpace>
                    <Deck color='#A183C7' name={'Mandarin'} />
                    <Deck color='#94A4F5' name={'Linear Algebra I'} />
                    <Deck color='#FCB778' name={'Math Statistics I'} />
                    <Deck color='#88FFCD' name={'Linear Algebra II'} />
                    <Deck color='#F59A94' name={'Calculus'} />
                    <Deck color='#F594C3' name={'Spanish'} />
                    <Deck color='#69C578' name={'Philosophy I'} />
                    <Deck color='#D5DE6C' name={'History I'} />
                    <Deck color='#87DAE5' name={'Math Statistics II'} />
                    <Deck color='#A183C7' name={'Mandarin'} />
                    <Deck color='#94A4F5' name={'Linear Algebra I'} />
                    <Deck color='#FCB778' name={'Math Statistics I'} />
                    <Deck color='#88FFCD' name={'Linear Algebra II'} />
                    <Deck color='#F59A94' name={'Calculus'} />
                    <Deck color='#F594C3' name={'Spanish'} />
                    <Deck color='#69C578' name={'Philosophy I'} />
                    <Deck color='#D5DE6C' name={'History I'} />
                    <Deck color='#87DAE5' name={'Math Statistics II'} />
                </DeckSpace>
                
            </div>
        </div>
    )
}

export default App
