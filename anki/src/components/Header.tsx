import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    const [theme, ] = useContext(ThemeContext)
    return(
        <header style={{
            position: 'absolute',
            top: 0,
            display: 'flex',
            height: '40px',
            width: '100%',
            backgroundColor: theme.primary,
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.secondary,
            fontSize: '20px',
            transition: 'background-color 100ms, color 100ms',
        }}>
            .anki
        </header>
    )
};

export default Header
