import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import { ButtonSwitch } from "components/ButtonSwitch";

import "./DeckInfo.css";

interface DeckInfoProps {
    name: string,
    color: string,
}

const DeckInfo = (props: DeckInfoProps) => {
    const [theme, ] = useContext(ThemeContext)

    // todo: deck info to be retrieved from API using the URL

    return(
        <div className='shadow-out-bottom deckinfo' style={{
            backgroundColor: theme.middleground,
            color: theme.text,
        }}>
            <div className='shadow-in-top-light inner-shadow-maker'/>
            <div className="deckname-holder">
                {props.name}
            </div>
            <div className="mode-buttons-holder">
                <ButtonSwitch is_on={true} text={'description'}
                            width={'var(--button-width)'}
                            height={'var(--button-height)'}
                            fontSize={16}/>
                <ButtonSwitch is_on={false} text={'stats'}
                            width={'var(--button-width)'}
                            height={'var(--button-height)'}
                            fontSize={16}/>
            </div>
            <div className="deckinfo-main">
                <div className="deckinfo-description-box">
                    This is to be a description box of sorts, I imagine. By default it is to be something like “(no description)” but italic because I want it to be so. The user can also write something meaningful here in order to define the purpose of the deck. I imagine this box would also support markdown and stuff but it’s not compulsory. This is just a description after all.
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium varius massa. Aliquam erat volutpat. Maecenas vel justo a diam finibus gravida. Curabitur cursus, erat ac sodales consectetur, augue diam cursus tellus, et consectetur diam felis vel urna.
                    <br/>
                    <br/>
                    The box is to be scrollable too.
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium varius massa. Aliquam erat volutpat. Maecenas vel justo a diam finibus gravida. Curabitur cursus, erat ac sodales consectetur, augue diam cursus tellus, et consectetur diam felis vel urna.
                    <br/>
                    <br/>
                    The box is to be scrollable too.
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium varius massa. Aliquam erat volutpat. Maecenas vel justo a diam finibus gravida. Curabitur cursus, erat ac sodales consectetur, augue diam cursus tellus, et consectetur diam felis vel urna.
                    <br/>
                    <br/>
                    The box is to be scrollable too.
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium varius massa. Aliquam erat volutpat. Maecenas vel justo a diam finibus gravida. Curabitur cursus, erat ac sodales consectetur, augue diam cursus tellus, et consectetur diam felis vel urna.
                    <br/>
                    <br/>
                    The box is to be scrollable too.
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium varius massa. Aliquam erat volutpat. Maecenas vel justo a diam finibus gravida. Curabitur cursus, erat ac sodales consectetur, augue diam cursus tellus, et consectetur diam felis vel urna.
                    <br/>
                    <br/>
                    The box is to be scrollable too.
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium varius massa. Aliquam erat volutpat. Maecenas vel justo a diam finibus gravida. Curabitur cursus, erat ac sodales consectetur, augue diam cursus tellus, et consectetur diam felis vel urna.
                    <br/>
                    <br/>
                    The box is to be scrollable too.
                </div>
            </div>
            <div className="bottom-clippy" style={{
                backgroundColor: props.color,
            }}>

            </div>
        </div>
    )
};

export { DeckInfo }
