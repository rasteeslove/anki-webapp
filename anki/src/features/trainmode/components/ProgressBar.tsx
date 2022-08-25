import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

import "./styles/ProgressBar.scss";
import { MiddleGroundPanel } from "components";

interface Props {
    current: number,
    total: number,
}

const ProgressBar = (props: Props) => {
    const [theme, ] = useContext(ThemeContext)

    return(
        <MiddleGroundPanel className="shadow-out-bottom progress-bar">
            <div className="progress" style={{
                width: `${props.current/props.total*100}%`,
                backgroundColor: theme.primary,
            }}/>
            {props.current}/{props.total}
        </MiddleGroundPanel>
    )
};

export { ProgressBar };
