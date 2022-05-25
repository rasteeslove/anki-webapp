import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import "./StatusBar.css"

interface Props {
    status: string | undefined,
}

const StatusBar = (props: Props) => {
    const [theme, ] = useContext(ThemeContext)

    return(
        <header className='status-bar' style={{
            color: theme.text,
            fontStyle: props.status ? 'inherit' : 'italic',
        }}>
            {props.status ? props.status : '(no status)'}
            <div className='shadow-caster'/>
        </header>
    )
};

export { StatusBar }
