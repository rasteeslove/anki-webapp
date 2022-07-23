import React, { useState } from "react";

import { ButtonSwitch } from "components/ButtonSwitch";
import { MarkdownTextArea } from "./MarkdownTextArea";
import { DeckStuffDTO } from "../types";

type Props = {
    deckStuff: DeckStuffDTO | undefined,
    setDeckStuff: React.Dispatch<React.SetStateAction<DeckStuffDTO | undefined>>,
};

enum SubMode {
    Question,
    Answer,
}

const Cards = (props: Props) => {
    const [cardIndex, setCardIndex] = useState<number>(0);
    const [subMode, setSubMode] = useState<SubMode>(SubMode.Question);

    return(
        <>
            {
                props.deckStuff &&
                <>
                    <div className="cards-iterator-container">
                        <ButtonSwitch text={'add'}
                                      is_on={false}
                                      onClick={() => {
                                          // TODO: add new card after the current one
                                      }}
                                      // TODO: reimplement the line below in CSS
                                      height={'var(--cards-button-height)'} width={60} fontSize={16}/>
                        <ButtonSwitch text={'prev'}
                                      is_on={ cardIndex === 0 }
                                      onClick={() => setCardIndex(cardIndex - 1)}
                                      // TODO: reimplement the line below in CSS
                                      height={'var(--cards-button-height)'} width={60} fontSize={16}/>
                        { cardIndex+1 }/{ props.deckStuff.cards.length }
                        <ButtonSwitch text={'next'}
                                      is_on={ cardIndex === props.deckStuff.cards.length-1 }
                                      onClick={() => setCardIndex(cardIndex + 1)}
                                      // TODO: reimplement the line below in CSS
                                      height={'var(--cards-button-height)'} width={60} fontSize={16}/>
                        <ButtonSwitch text={'rm'}
                                      is_on={false}
                                      onClick={() => {
                                          // TODO: remove the cardIndex card
                                      }}
                                      // TODO: reimplement the line below in CSS
                                      height={'var(--cards-button-height)'} width={60} fontSize={16}/>
                    </div>
                    <div className="cards-qa-container">
                        <ButtonSwitch text={'question'}
                                      is_on={ subMode === SubMode.Question }
                                      onClick={() => setSubMode(SubMode.Question)}
                                      // TODO: reimplement the line below in CSS
                                      height={'var(--cards-button-height)'} width={120} fontSize={16}/>
                        <ButtonSwitch text={'answer'}
                                      is_on={ subMode === SubMode.Answer }
                                      onClick={() => setSubMode(SubMode.Answer)}
                                      // TODO: reimplement the line below in CSS
                                      height={'var(--cards-button-height)'} width={120} fontSize={16}/>
                    </div>
                    <div className="cards-md-container">
                        <MarkdownTextArea key={subMode}   // can you guess what problem the key solves? if no, that's bc it's a bs solution. TODO: figure out the better way
                                          value={ subMode === SubMode.Question ? props.deckStuff.cards[cardIndex].question
                                                                               : props.deckStuff.cards[cardIndex].answer }
                                          onChange={(event) => {
                                              props.setDeckStuff(prev => ({
                                                  deck: prev!.deck,
                                                  cards: prev!.cards.map(card => card.id === props.deckStuff!.cards[cardIndex].id ? {
                                                      ...card,
                                                      question: subMode === SubMode.Question ? event.target.value : card.question,
                                                      answer: subMode === SubMode.Answer ? event.target.value : card.answer,
                                                  } : card),
                                              }))
                                          }}/>
                    </div>
                    <div className="cards-show-preview">
                        <ButtonSwitch text={'show preview'}
                                      is_on={false}
                                      // TODO: reimplement the line below in CSS
                                      width={200} height={'var(--cards-button-height)'} fontSize={18}/>
                    </div>
                </>
            }
        </>
    );
};

export { Cards };
