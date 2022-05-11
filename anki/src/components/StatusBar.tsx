import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

interface Props {
    status: string | undefined,
}

const StatusBar = (props: Props) => {
    const [theme, ] = useContext(ThemeContext)

    return(
        <header style={{
            position: 'absolute',
            top: 0,
            display: 'flex',
            height: '40px',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 69,
            fontSize: '20px',
            color: theme.text,
            transition: 'color 100ms',
            fontStyle: props.status ? 'inherit' : 'italic',
        }}>
            {props.status ? props.status : '(no status)'}
            <div style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                maxWidth: 800,
                left: '50%',
                transform: 'translate(-50%, 0)',
                boxShadow: '0px 12px 6px -12px #000000',
            }}/>
        </header>
    )
};

export { StatusBar }
