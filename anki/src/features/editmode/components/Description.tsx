import React from "react";

import { ButtonSwitch } from "components/ButtonSwitch";
import { MarkdownTextArea } from "./MarkdownTextArea";
import { DeckStuffDTO } from "../types";

type Props = {
    deckStuff: DeckStuffDTO | undefined,
    setDeckStuff: React.Dispatch<React.SetStateAction<DeckStuffDTO | undefined>>,
};

const Description = (props: Props) => {
    return(
        <>
            {
                props.deckStuff &&
                <>
                    <div className="description-md-container">
                        <MarkdownTextArea value={props.deckStuff.deck.description} onChange={(event) => {
                            props.setDeckStuff({
                                deck: {
                                    ...props.deckStuff!.deck,
                                    description: event.target.value,
                                },
                                cards: props.deckStuff!.cards,
                            });
                        }}/>
                    </div>
                    <div className="description-show-preview-container">
                        { /* TODO: add markdown & LaTeX support */ }
                        <ButtonSwitch text={'show preview'}
                                      is_on={false}
                                      // TODO: reimplement the line below in CSS
                                      width={200} height={'var(--button-height)'} fontSize={18}/>
                    </div>
                </>
            }
        </>
    );
};

export { Description };
