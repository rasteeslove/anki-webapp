import React from "react";

import { ButtonSwitch } from "components/ButtonSwitch";
import { PlainInput } from "./PlainInput";
import { Deck } from "components/Deck";
import { DeckStuffDTO } from "../types";

type Props = {
    deckStuff: DeckStuffDTO | undefined,
    setDeckStuff: React.Dispatch<React.SetStateAction<DeckStuffDTO | undefined>>,
};

const General = (props: Props) => {
    return(
        <>
            {
                props.deckStuff &&
                <>
                    <div className="general-deckname-container">
                        deck name:
                        <PlainInput value={props.deckStuff.deck.name}
                                    onChange={(event) => {
                                        props.setDeckStuff({
                                            deck: {
                                                ...props.deckStuff!.deck,
                                                name: event.target.value,
                                            },
                                            cards: props.deckStuff!.cards,
                                        })
                                    }}
                                    // TODO: reimplement the line below in CSS
                                    height={40} width={240}/>
                    </div>
                    <div className="general-color-container">
                        deck color:
                        <PlainInput value={props.deckStuff.deck.color}
                                    isColor={true}
                                    onChange={(event) =>
                                        props.setDeckStuff({
                                            deck: {
                                                ...props.deckStuff!.deck,
                                                color: event.target.value,
                                            },
                                            cards: props.deckStuff!.cards,
                                        })}
                                    // TODO: reimplement the line below in CSS
                                    height={40} width={240}/>
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
                        <ButtonSwitch text={'private'}
                                      is_on={!props.deckStuff.deck.public}
                                      onClick={() => {
                                          props.setDeckStuff({
                                              deck: {
                                                  ...props.deckStuff!.deck,
                                                  public: false,
                                              },
                                              cards: props.deckStuff!.cards,
                                          })
                                      }}
                                      // TODO: reimplement the line below in CSS
                                      height={32} width={120} fontSize={16}/>
                        <ButtonSwitch text={'public'}
                                      is_on={props.deckStuff.deck.public}
                                      onClick={() => {
                                          props.setDeckStuff({
                                              deck: {
                                                  ...props.deckStuff!.deck,
                                                  public: true,
                                              },
                                              cards: props.deckStuff!.cards,
                                          })
                                      }}
                                      // TODO: reimplement the line below in CSS
                                      height={32} width={120} fontSize={16}/>
                    </div>
                </>
            }
        </>
    );
};

export { General };
