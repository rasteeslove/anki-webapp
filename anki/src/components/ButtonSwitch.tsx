import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

import "./ButtonSwitch.css";

interface Props {
    is_on: boolean,
    text: string,
    width: number | string,
    height: number | string,
    super?: boolean,
    fontSize?: number | string,
    onClick?: () => void,
    onMouseDown?: () => void,
    onMouseUp?: () => void,
    color?: string,
}

const ButtonSwitch = (props: Props) => {
    const [theme, ] = useContext(ThemeContext);

    return(
        <div className="buttonswitch-container" style={{
            width: props.width,
            height: props.height,
        }}>
            <button disabled={props.is_on} className={'button-switch '.concat(props.is_on ? 'shadow-in-top' : 'shadow-out-bottom')} style={{
                height: props.height,
                backgroundColor: props.color ? props.color :
                                 props.is_on ? theme.pressed_in :
                                 props.super ? theme.middleground : theme.foreground,
                color: props.is_on ? theme.pressed_in_text : theme.text,
                fontSize: props.fontSize ? props.fontSize : '20px',
            }} onClick={props.onClick}
            onMouseDown={props.onMouseDown}
            onMouseUp={props.onMouseUp}>
                {props.text}
            </button>
        </div>
    );
};

export { ButtonSwitch };
