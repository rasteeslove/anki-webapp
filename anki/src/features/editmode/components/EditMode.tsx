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

const EditMode = () => {
    const { username, deckname } = useParams();

    const [theme, ] = useContext(ThemeContext);
    const [deckStuff, setDeckStuff] = useState<DeckStuffDTO | undefined>(undefined);
    const [submode, setSubmode] = useState<string>('general');

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
                            <ButtonSwitch is_on={submode === 'general'}
                                          text={'general'}
                                          height={40} width={'var(--button-width)'} super={true} fontSize={'var(--button-font-size)'} onClick={() => {setSubmode('general')}}/>
                            <ButtonSwitch is_on={submode === 'description'}
                                          text={'description'}
                                          height={40} width={'var(--button-width)'} super={true} fontSize={'var(--button-font-size)'} onClick={() => {setSubmode('description')}}/>
                            <ButtonSwitch is_on={submode === 'cards'}
                                          text={'cards'}
                                          height={40} width={'var(--button-width)'} super={true} fontSize={'var(--button-font-size)'} onClick={() => {setSubmode('cards')}}/>
                        </div>
                        <div className='shadow-out-bottom main-container' style={{
                            backgroundColor: theme.middleground,
                            color: theme.text,
                        }}>
                            {
                                submode === 'general' &&
                                <General deckStuff={deckStuff} setDeckStuff={setDeckStuff} />
                            }
                            {
                                submode === 'description' &&
                                <Description deckStuff={deckStuff} setDeckStuff={setDeckStuff} />
                            }
                            {
                                submode === 'cards' &&
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
