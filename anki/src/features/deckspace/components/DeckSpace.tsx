import { useState, useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Deck, StatusBar, FadeInOut } from "components";

import { getDecks } from "features/deckspace/api";
import { DeckType } from "../types";
import "./DeckSpace.css";

const DeckSpace = () => {
    const { username, deckname } = useParams();
    const [decks, setDecks] = useState<Array<DeckType>>([]);

    const navigate = useNavigate();

    // TODO: make sure this use effect doesn't get called too often
    useEffect(() => {
        getDecks(username!)
            .then(data => setDecks(data))
    }, [username]);

    return(
        <div className="deck-space-and-status-bar">
            <StatusBar status={'your decks'}/>
            <div className="deckspace" style={{
                overflowY: 'auto',
            }}>
                <div className="decks">
                    {
                        decks.map(deck => <Deck key={deck.id}
                                                name={deck.name}
                                                color={deck.color}
                                                onClick={() => {
                                                    navigate(`/${username}/${deck.name}`);
                                                }}/>)
                    }
                </div>
            </div>
            <FadeInOut show={!!deckname} duration={100} style={{
                /* don't know how to avoid using inline style here yet */
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
                    navigate(`/${username}`);
                }}/>
                <Outlet/>
            </FadeInOut>
        </div>
    )
};

export { DeckSpace };
