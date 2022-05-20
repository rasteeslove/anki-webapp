import { useState } from "react";
import { FadeInOut } from "components/FadeInOut";
import { StatusBar } from "components/StatusBar";
import { Deck } from "./Deck";
import { DeckInfo } from "./DeckInfo";

import "./DeckSpace.css";

const DeckSpace = () => {
    const [deckSelected, setDeckSelected] = useState(false)

    // todo: decks to be retrieved from API using current URL username fragment.
    // if invalid, perform redirect to auth / auth'd user deckspace

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

    return(
        <div className="deck-space-and-status-bar">
            <StatusBar status={'your decks'}/>
            <div className="deckspace" style={{
                overflowY: deckSelected ? 'hidden' : 'auto',
            }}>
                <div className="decks">
                    {getDecks()}
                </div>
            </div>
            <FadeInOut show={deckSelected} duration={100} style={{
                position: 'absolute',
                top: 40,
                bottom: 0,
                width: '100%',
                backdropFilter: 'blur(10px)',
            }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                }} onClick={() => {
                    if (deckSelected) {
                        setDeckSelected(false)
                    }
                }}/>
                <DeckInfo name={'Spanish'} color={'#F594C3'}/>
            </FadeInOut>
        </div>
    )
};

export {DeckSpace}
