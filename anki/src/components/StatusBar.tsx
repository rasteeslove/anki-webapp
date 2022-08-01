import { useContext } from 'react';
import { ThemeContext } from 'context/ThemeContext';

import "./styles/StatusBar.scss";

interface Props {
    status?: string,
    noShadow?: boolean,
}

const StatusBar = (props: Props) => {
    const [theme, ] = useContext(ThemeContext);

    return(
        <header className='status-bar' style={{
            color: theme.text,
            fontStyle: props.status ? 'inherit' : 'italic',
        }}>
            {props.status ? props.status : '(no status)'}
            {
                !props.noShadow &&
                <div className='shadow-caster'/>
            }
        </header>
    );
};

export { StatusBar };
