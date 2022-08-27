/*\
The code taken from https://loading.io/css/
\*/

import { useContext } from "react";
import { ThemeContext } from "../context";
import './styles/Loading.scss';

const Loading = () => {
    const [theme, ] = useContext(ThemeContext);

    return(
        <div className="lds-ellipsis">
            {
                [...Array(4)].map((e, i) => <div style={{
                    backgroundColor: theme.text,
                }} key={i}/>)
            }
        </div>
    );
};

export { Loading };
