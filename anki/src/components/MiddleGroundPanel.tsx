import React, { useContext } from "react";
import { ThemeContext } from "context";

interface Props {
    children?: React.ReactNode,
    className?: string,
}

const MiddleGroundPanel = (props: Props) => {
    const [theme,] = useContext(ThemeContext);

    return(
        <div className={props.className} style={{
            backgroundColor: theme.middleground,
            color: theme.text,
        }}>
            {props.children}
        </div>
    );
};

export { MiddleGroundPanel };
