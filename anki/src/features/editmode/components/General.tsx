import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { ButtonSwitch } from "components/ButtonSwitch";
import { PlainInput } from "./PlainInput";
import { Deck } from "components/Deck";
import { DeckStuffDTO } from "../types";
import { updateDeckStuff } from "../api";

type Props = {
    deckStuff: DeckStuffDTO | undefined,
    setDeckStuff: React.Dispatch<React.SetStateAction<DeckStuffDTO | undefined>>,
};

const General = (props: Props) => {
    const { username } = useParams();
    const navigate = useNavigate();

    return(
        <>
            {
                props.deckStuff &&
                <>
                    <div className="general-deckname-container">
                        deck name:
                        <PlainInput height={40} width={240} value={props.deckStuff.deck.name}
                                    saveChanges={(newVal) => {
                                        if (props.deckStuff) {
                                            updateDeckStuff(username!, props.deckStuff)
                                                .then(() => console.log(`saved ${newVal}`))
                                                .then(() => navigate(`/${username}/${newVal}/edit`));
                                        }
                                    }}
                                    onChange={(event) => {
                                        props.setDeckStuff({
                                            deck: {
                                                ...props.deckStuff!.deck,
                                                name: event.target.value,
                                            },
                                            cards: props.deckStuff!.cards,
                                        })
                                    }}/>
                    </div>
                    <div className="general-color-container">
                        deck color:
                        <PlainInput height={40} width={240} value={props.deckStuff.deck.color}
                                    isColor={true}
                                    saveChanges={(newVal) => {
                                        if (props.deckStuff) {
                                            updateDeckStuff(username!, props.deckStuff)
                                                .then(() => console.log(`saved ${newVal}`));
                                        }
                                    }}
                                    onChange={(event) =>
                                        props.setDeckStuff({
                                            deck: {
                                                ...props.deckStuff!.deck,
                                                color: event.target.value,
                                            },
                                            cards: props.deckStuff!.cards,
                                        })}/>
                    </div>
                    <div className="general-preview-container">
                        preview:
                        <Deck name={props.deckStuff.deck.name} color={props.deckStuff.deck.color} isDecky={true}/>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexGrow: 1,
                    }}/>
                    <div className="general-private-public-container">
                        <ButtonSwitch is_on={!props.deckStuff.deck.public} text={'private'} height={32} width={120} fontSize={16}
                                      onClick={() => {
                                          props.setDeckStuff({
                                              deck: {
                                                  ...props.deckStuff!.deck,
                                                  public: false,
                                              },
                                              cards: props.deckStuff!.cards,
                                          })
                                      }}/>
                        <ButtonSwitch is_on={props.deckStuff.deck.public} text={'public'} height={32} width={120} fontSize={16}
                                      onClick={() => {
                                          props.setDeckStuff({
                                              deck: {
                                                  ...props.deckStuff!.deck,
                                                  public: true,
                                              },
                                              cards: props.deckStuff!.cards,
                                          })
                                      }}/>
                    </div>
                </>
            }
        </>
    );
};

export { General };
