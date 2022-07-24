import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

import "./ProgressBar.css";

interface Props {
    current: number,
    total: number,
}

const ProgressBar = (props: Props) => {
    const [theme, ] = useContext(ThemeContext)

    return(
        <div className="shadow-out-bottom progress-bar" style={{
            backgroundColor: theme.middleground,
            color: theme.text,
        }}>
            <div className="progress" style={{
                width: `${props.current/props.total*100}%`,
                backgroundColor: theme.primary,
            }}/>
            {props.current}/{props.total}
        </div>
    )
};

export { ProgressBar };
