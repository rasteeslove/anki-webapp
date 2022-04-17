import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

interface Props {
    status: string | undefined,
}

const StatusBar = (props: Props) => {
    const [theme, ] = useContext(ThemeContext)

    return(
        <header style={{
            display: 'flex',
            height: '40px',
            minHeight: '40px',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <p style={{
                fontSize: '20px',
                color: theme.text,
                transition: 'color 100ms',
                fontStyle: props.status ? 'inherit' : 'italic',
            }}>{props.status ? props.status : '(no status)'}</p>
        </header>
    )
};

export default StatusBar
