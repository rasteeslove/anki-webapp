import React, { useState } from "react";

import { ButtonSwitch } from "components/ButtonSwitch";
import MarkdownTextArea from "./MarkdownTextArea";
import { DeckStuffDTO } from "../types";

type Props = {
    deckStuff: DeckStuffDTO | undefined,
    setDeckStuff: React.Dispatch<React.SetStateAction<DeckStuffDTO | undefined>>,
};

const Cards = (props: Props) => {
    const [deckStuff, setDeckStuff] = useState<DeckStuffDTO | undefined>(props.deckStuff);

    return(
        <>
            <div className="cards-iterator-container">
                <ButtonSwitch is_on={false} text={'add'} height={'var(--cards-button-height)'} width={60} fontSize={16}/>
                <ButtonSwitch is_on={false} text={'prev'} height={'var(--cards-button-height)'} width={60} fontSize={16}/>
                42/69
                <ButtonSwitch is_on={false} text={'next'} height={'var(--cards-button-height)'} width={60} fontSize={16}/>
                <ButtonSwitch is_on={false} text={'rm'} height={'var(--cards-button-height)'} width={60} fontSize={16}/>
            </div>
            <div className="cards-qa-container">
                <ButtonSwitch is_on={true} height={'var(--cards-button-height)'} width={120} text={'question'} fontSize={16}/>
                <ButtonSwitch is_on={false} height={'var(--cards-button-height)'} width={120} text={'answer'} fontSize={16}/>
            </div>
            <div className="cards-md-container">
                <MarkdownTextArea/>
            </div>
            <div className="cards-show-preview">
                <ButtonSwitch is_on={false} text={'show preview'} width={200} height={'var(--cards-button-height)'} fontSize={18}/>
            </div> 
        </>
    );
};

export { Cards };
