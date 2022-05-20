import { useContext, useState } from "react";
import { ThemeContext } from "context/ThemeContext";
import { ButtonSwitch } from "components/ButtonSwitch";
import { StatusBar } from "components/StatusBar";

import { General } from "./General";
import { Description } from "./Description";
import { Cards } from "./Cards";

import "./EditMode.css";

const EditMode = () => {
    const [theme, ] = useContext(ThemeContext)
    const [submode, setSubmode] = useState<string>('general')

    return(
        <div className="editmode-and-status-bar">
            <StatusBar status={'the "Spanish" deck: editing mode'}/>
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
                        <General/>
                    }
                    {
                        submode === 'description' &&
                        <Description/>
                    }
                    {
                        submode === 'cards' &&
                        <Cards/>
                    }
                </div>
            </div>
        </div>
    )
}

export { EditMode }
