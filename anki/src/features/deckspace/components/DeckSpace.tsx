import { useState, useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Deck, FadeInOut } from "components";

import { getMe } from 'api';
import { getDecks } from "features/deckspace/api";
import { DeckType } from "types";
import "./styles/DeckSpace.scss";

const DeckSpace = () => {
    const { username, deckname } = useParams();
    const [decks, setDecks] = useState<Array<DeckType>>([]);

    const navigate = useNavigate();

    useEffect(() => {
        getDecks(username!)
            .then(data => {
                setDecks(data);
            })
            .catch(() => {
                getMe()
                    .then((data) => {
                        if (typeof data != "string") {
                            navigate(`/${data.username}`);
                        } else {
                            navigate('/auth/login');
                        }
                    })
                    .catch(() => {
                        navigate('/auth/login');
                    });
            })
    }, [username, navigate]);

    return(
        <div className="deck-space-container">
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
