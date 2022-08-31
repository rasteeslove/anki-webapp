import { useState, useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Deck, FadeInOut, Loading } from "components";

import { getMe } from 'api';
import { getDecks, createDeck } from "features/deckspace/api";
import { DeckType } from "types";
import "./styles/DeckSpace.scss";
import { AddDeck } from "./AddDeck";

const DeckSpace = () => {
    const { username, deckname } = useParams();
    const [decks, setDecks] = useState<Array<DeckType>>([]);
    const [isMyDeckspace, setIsMyDeckspace] = useState<boolean>(false);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        getDecks(username!)
            .then(data => {
                setDecks(data.decks);
            })
            .then(() => {
                getMe()
                    .then(data => {
                        if (data.user?.username === username) {
                            setIsMyDeckspace(true);
                        }
                        setIsLoaded(true);
                    })
            })
            .catch(() => {
                getMe()
                    .then((data) => {
                        if (data.user) {
                            navigate(`/${data.user.username}`);
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
        <>
            <div className="deckspace" style={{
                overflowY: 'auto',
            }}>
                {
                    isLoaded ?
                        <div className="decks">
                            {
                                decks.map(deck => <Deck key={deck.id}
                                                        name={deck.name}
                                                        color={deck.color}
                                                        onClick={() => {
                                                            navigate(`/${username}/${deck.name}`);
                                                        }}/>)
                            }
                            {
                                isMyDeckspace &&
                                <AddDeck onClick={() => {
                                    createDeck(username!)
                                        .then(data => setDecks([...decks, data.decks[0]]))
                                }}/>
                            }
                        </div>
                        :
                        <Loading/>
                }
            </div>
            <FadeInOut show={!!deckname} duration={100} style={{
                /* don't know how to avoid using inline style here yet */
                position: 'absolute',
                top: 0,
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
        </>
    )
};

export { DeckSpace };
