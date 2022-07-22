import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ThemeContext } from "context/ThemeContext";
import { ButtonSwitch } from "components/ButtonSwitch";
import { StatusBar } from "components/StatusBar";
import { DeckStuffDTO } from "../types";
import { getDeckStuff } from "../api";
import { General } from "./General";
import { Description } from "./Description";
import { Cards } from "./Cards";
import "./EditMode.css";

enum SubMode {
    General,
    Description,
    Cards,
}

const EditMode = () => {
    const { username, deckname } = useParams();

    const [theme, ] = useContext(ThemeContext);
    const [deckStuff, setDeckStuff] = useState<DeckStuffDTO | undefined>(undefined);
    const [subMode, setSubMode] = useState<SubMode>(SubMode.General);

    useEffect(() => {
        getDeckStuff(username!, deckname!)
            .then((data) => setDeckStuff(data));
    }, [username, deckname]);

    return(
        <>
            {
                deckStuff &&
                <div className="editmode-and-status-bar">
                    <StatusBar status={`the "${deckStuff.deck.name}" deck: editing mode`}/>
                    <div className="editmode">
                        <div className="buttons-holder">
                            <ButtonSwitch is_on={subMode === SubMode.General}
                                          text={'general'}
                                          height={40} width={'var(--button-width)'}
                                          super={true}
                                          fontSize={'var(--button-font-size)'}
                                          onClick={() => {setSubMode(SubMode.General)}}/>
                            <ButtonSwitch is_on={subMode === SubMode.Description}
                                          text={'description'}
                                          height={40} width={'var(--button-width)'}
                                          super={true}
                                          fontSize={'var(--button-font-size)'}
                                          onClick={() => {setSubMode(SubMode.Description)}}/>
                            <ButtonSwitch is_on={subMode === SubMode.Cards}
                                          text={'cards'}
                                          height={40} width={'var(--button-width)'}
                                          super={true}
                                          fontSize={'var(--button-font-size)'}
                                          onClick={() => {setSubMode(SubMode.Cards)}}/>
                        </div>
                        <div className='shadow-out-bottom main-container' style={{
                            backgroundColor: theme.middleground,
                            color: theme.text,
                        }}>
                            {
                                subMode === SubMode.General &&
                                <General deckStuff={deckStuff} setDeckStuff={setDeckStuff} />
                            }
                            {
                                subMode === SubMode.Description &&
                                <Description deckStuff={deckStuff} setDeckStuff={setDeckStuff} />
                            }
                            {
                                subMode === SubMode.Cards &&
                                <Cards deckStuff={deckStuff} setDeckStuff={setDeckStuff} />
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export { EditMode };
