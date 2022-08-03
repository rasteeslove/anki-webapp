import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { ButtonSwitch } from "components/ButtonSwitch";
import { DeckStuffDTO } from "../types";
import { getDeckStuff, updateDeckStuff } from "../api";
import { sameDeckStuff } from "../utils";
import { General } from "./General";
import { Description } from "./Description";
import { Cards } from "./Cards";
import { SaveChangesBar } from "./SaveChangesBar";
import "./styles/EditMode.scss";
import { MiddleGroundPanel } from "components";

enum SubMode {
    General,
    Description,
    Cards,
}

const EditMode = () => {
    const { username, deckname } = useParams();
    const navigate = useNavigate();

    const [deckStuff, setDeckStuff] = useState<DeckStuffDTO | undefined>(undefined);
    const [newDeckStuff, setNewDeckStuff] = useState<DeckStuffDTO | undefined>(undefined);
    const [subMode, setSubMode] = useState<SubMode>(SubMode.General);

    useEffect(() => {
        getDeckStuff(username!, deckname!)
            .then((data) => {
                setDeckStuff(data);
                setNewDeckStuff(data);
            });
    }, [username, deckname]);

    return(
        <>
            {
                deckStuff &&
                <div className="editmode">
                    <div className="buttons-holder">
                        <ButtonSwitch text={'general'}
                                      super={true}
                                      is_on={subMode === SubMode.General}
                                      onClick={() => {setSubMode(SubMode.General)}}
                                      height={40} width={'var(--button-width)'} fontSize={'var(--button-font-size)'}/>
                        <ButtonSwitch text={'description'}
                                      super={true}
                                      is_on={subMode === SubMode.Description}
                                      onClick={() => {setSubMode(SubMode.Description)}}
                                      height={40} width={'var(--button-width)'} fontSize={'var(--button-font-size)'}/>
                        <ButtonSwitch text={'cards'}
                                      super={true}
                                      is_on={subMode === SubMode.Cards}
                                      onClick={() => {setSubMode(SubMode.Cards)}}
                                      height={40} width={'var(--button-width)'} fontSize={'var(--button-font-size)'}/>
                    </div>
                    <MiddleGroundPanel className='shadow-out-bottom main-container'>
                        {
                            subMode === SubMode.General &&
                            <General deckStuff={newDeckStuff} setDeckStuff={setNewDeckStuff} />
                        }
                        {
                            subMode === SubMode.Description &&
                            <Description deckStuff={newDeckStuff} setDeckStuff={setNewDeckStuff} />
                        }
                        {
                            subMode === SubMode.Cards &&
                            <Cards deckStuff={newDeckStuff} setDeckStuff={setNewDeckStuff} />
                        }
                    </MiddleGroundPanel>
                </div>
            }
            {
                deckStuff && newDeckStuff &&
                !sameDeckStuff(deckStuff, newDeckStuff) &&
                <SaveChangesBar saveFunction={() => {
                    updateDeckStuff(username!, newDeckStuff)
                        .then(() => {
                            setDeckStuff(newDeckStuff);
                        })
                        .then(() => navigate(`/${username}/${newDeckStuff.deck.name}/edit`))
                        .catch(() => {
                            console.log('Error saving data.');
                        })
                }}/>
            }
        </>
    );
};

export { EditMode };
