import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

interface Props {
    width: number,
    height: number,
    children?: JSX.Element,
}

// todo: account for the color circle here and not outside;
//       the code here is pretty shitty tbh
const PlainInput = (props: Props) => {
    const [theme, ] = useContext(ThemeContext)

    return(
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            transform: props.children ? 'translate(16px)' : 'none'
        }}>
            <input className="shadow-in-top" style={{
                background: 'transparent',
                border: 'none',
                fontSize: 16,
                borderRadius: 20,
                height: props.height,
                width: props.width,
                textAlign: 'center',
                backgroundColor: theme.foreground,
                color: theme.text,
            }}/>
            {props.children}
        </div>
    )
}

export { PlainInput }
