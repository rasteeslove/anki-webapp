import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

interface Props {
    current: number,
    total: number,
}

const ProgressBar = (props: Props) => {
    const [theme, ] = useContext(ThemeContext)

    return(
        <div className="shadow-out-bottom" style={{
            position: 'absolute',
            top: 20,
            height: 40,
            width: '90%',
            maxWidth: 900,
            borderRadius: 20,
            backgroundColor: theme.middleground,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.text,
            fontSize: 20,
            overflow: 'hidden',
        }}>
            <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: `${props.current/props.total*100}%`,
                backgroundColor: theme.primary,
                opacity: '40%',
            }}/>
            {props.current}/{props.total}
        </div>
    )
};

export default ProgressBar
