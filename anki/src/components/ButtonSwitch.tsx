import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface Props {
    is_on: boolean,
    text: string,
    width: number,
    height: number,
    fontSize?: number,
    onClick?: () => void,
    onMouseDown?: () => void,
    onMouseUp?: () => void,
}

const ButtonSwitch = (props: Props) => {
    const [theme, ] = useContext(ThemeContext)
    return(
        <div style={{
            width: props.width,
            height: props.height,
            display: 'flex',
            justifyContent: 'center',
        }}>
            <button disabled={props.is_on} className={'button-switch '.concat(props.is_on ? 'shadow-in-top' : 'shadow-out-bottom')} style={{
                height: props.height,
                backgroundColor: props.is_on ? theme.button_switch_on : theme.button_switch_off,
                color: props.is_on ? '#FFFFFF' : '#696969',
                fontSize: props.fontSize ? props.fontSize : '20px',
                border: 'none',
                borderRadius: props.height / 2,
                transition: 'background-color 100ms, width 100ms',
            }} onClick={props.onClick}
            onMouseDown={props.onMouseDown}
            onMouseUp={props.onMouseUp}>
                {props.text}
            </button>
        </div>
    )
};

export default ButtonSwitch
