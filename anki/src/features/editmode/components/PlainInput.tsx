import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

import "./PlainInput.css";

interface Props {
    width: number,
    height: number,
    children?: JSX.Element,
};

// todo: account for the color circle here and not outside;
//       the code here is pretty shitty tbh
const PlainInput = (props: Props) => {
    const [theme, ] = useContext(ThemeContext);

    return(
        <div className="input-wrapper" style={{
            transform: props.children ? 'translate(16px)' : 'none'
        }}>
            <input className="shadow-in-top" style={{
                height: props.height,
                width: props.width,
                backgroundColor: theme.foreground,
                color: theme.text,
            }}/>
            {props.children}
        </div>
    );
};

export { PlainInput };
