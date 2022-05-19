import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface Props {
    is_on: boolean,
    text: string,
    width: number | string,
    height: number | string,
    super?: boolean,
    fontSize?: number,
    onClick?: () => void,
    onMouseDown?: () => void,
    onMouseUp?: () => void,
    color?: string,
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
                backgroundColor: props.color ? props.color :
                                 props.super ? (props.is_on ? theme.pressed_in : theme.middleground)
                                             : (props.is_on ? theme.pressed_in : theme.foreground),
                color: props.is_on ? theme.pressed_in_text : theme.text,
                fontSize: props.fontSize ? props.fontSize : '20px',
                border: 'none',
                borderRadius: 696969, // don't ask why. just don't.    (todo: maybe find cleaner solution than https://stackoverflow.com/questions/27233295/possible-to-make-border-radius-equal-to-half-the-total-height-without-javascript)
                transition: 'background-color 100ms, width 100ms',
            }} onClick={props.onClick}
            onMouseDown={props.onMouseDown}
            onMouseUp={props.onMouseUp}>
                {props.text}
            </button>
        </div>
    )
};

export { ButtonSwitch }
