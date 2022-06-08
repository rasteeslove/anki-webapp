import { useState, useEffect } from "react";
import { FadeInOut } from "components/FadeInOut";
import { StatusBar } from "components/StatusBar";
import { Deck } from "components/Deck";
import { DeckInfo } from "./DeckInfo";

import { getDecks } from "features/deckspace/api";

import "./DeckSpace.css";

type DeckType = {
    id: number,
    name: string,
    color: string,
    public: boolean,
    owner: number,
}

const DeckSpace = () => {
    const [decks, setDecks] = useState<Array<DeckType>>([]);
    const [deckSelected, setDeckSelected] = useState(false);

    // todo: decks to be retrieved from API using current URL username fragment.
    // if invalid, perform redirect to auth / auth'd user deckspace
    useEffect(() => {
        getDecks('krastsislau').then(data => setDecks(data));
    }, []);

    return(
        <div className="deck-space-and-status-bar">
            <StatusBar status={'your decks'}/>
            <div className="deckspace" style={{
                overflowY: deckSelected ? 'hidden' : 'auto',
            }}>
                <div className="decks">
                    {
                        decks.map(deck => <Deck key={deck.id} name={deck.name} color={deck.color}/>)
                    }
                </div>
            </div>
            <FadeInOut show={deckSelected} duration={100} style={{
                /* don't know how to avoid using inline style here */
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
