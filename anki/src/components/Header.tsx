import { useContext } from "react";
import { ThemeContext, themes } from "../context/ThemeContext";

import "./styles/Header.scss";

const Header = () => {
    const [theme, setTheme] = useContext(ThemeContext);

    return(
        <header className="main-header" style={{
            backgroundColor: theme.primary,
            color: theme.secondary,
        }}>
            .anki
            <div className="theme-toggle">
                <button onClick={() => {
                    setTheme(theme === themes.light ? themes.dark : themes.light)
                }}>change theme</button>
            </div>
        </header>
    );
};

export { Header };
