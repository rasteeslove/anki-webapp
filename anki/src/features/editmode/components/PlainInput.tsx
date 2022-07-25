import React, { useContext, useState } from "react";
import { ThemeContext } from "context/ThemeContext";

import "./PlainInput.css";

interface Props {
    width: number,
    height: number,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    saveChanges?: (newVal: string) => void,
    isColor?: boolean,
}

const PlainInput = (props: Props) => {
    const [theme, ] = useContext(ThemeContext);
    const [value, setValue] = useState<string>(props.value);

    const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (props.saveChanges && event.key === 'Enter') {
            props.saveChanges(value);
        }
    }

    return(
        <div className="input-wrapper" style={{
            transform: props.isColor ? 'translate(16px)' : 'none'
        }}>
            <input className="shadow-in-top"
                   value={props.value}
                   onChange={(event) => {
                       setValue(event.target.value);
                       props.onChange(event);
                   }}
                   onBlur={(event) => {
                       if (props.saveChanges) {
                           props.saveChanges(event.target.value);
                       }
                   }}
                   onKeyDown={(event) => onPressEnter(event)}
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
