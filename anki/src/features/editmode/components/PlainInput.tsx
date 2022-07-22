import React, { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

import "./PlainInput.css";

interface Props {
    width: number,
    height: number,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    isColor?: boolean,
}

const PlainInput = (props: Props) => {
    const [theme, ] = useContext(ThemeContext);

    return(
        <div className="input-wrapper" style={{
            transform: props.isColor ? 'translate(16px)' : 'none'
        }}>
            <input className="shadow-in-top"
                   value={props.value}
                   onChange={(event) => props.onChange(event)}
                   style={{
                       height: props.height,
                       width: props.width,
                       backgroundColor: theme.foreground,
                       color: theme.text,
                   }}/>
            {
                props.isColor &&
                <div className="shadow-in-top color-circle" style={{
                    backgroundColor: props.value,
                }}/>
            }
        </div>
    );
};

export { PlainInput };
