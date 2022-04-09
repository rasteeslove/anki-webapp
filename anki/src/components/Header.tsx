import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    const [theme, ] = useContext(ThemeContext)
    return(
        <header style={{
            display: 'flex',
            height: '40px',
            width: '100%',
            backgroundColor: theme.primary,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <p style={{
                color: theme.secondary,
                fontSize: '20px',
            }}>.anki</p>
        </header>
    )
};


export default Header
