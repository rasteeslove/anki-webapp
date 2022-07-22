import React, { useState } from "react";

import { ButtonSwitch } from "components/ButtonSwitch";
import MarkdownTextArea from "./MarkdownTextArea";
import { DeckStuffDTO } from "../types";

type Props = {
    deckStuff: DeckStuffDTO | undefined,
    setDeckStuff: React.Dispatch<React.SetStateAction<DeckStuffDTO | undefined>>,
};

const Description = (props: Props) => {
    const [deckStuff, setDeckStuff] = useState<DeckStuffDTO | undefined>(props.deckStuff);

    return(
        <>
            <div className="description-md-container">
                <MarkdownTextArea/>
            </div>
            <div className="description-show-preview-container">
                <ButtonSwitch is_on={false} text={'show preview'} width={200} height={'var(--button-height)'} fontSize={18}/>
            </div> 
        </>
    );
};

export { Description };
