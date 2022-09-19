import { useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { ThemeContext, themes } from "../context/ThemeContext";
import { storage } from "../utils/storage";

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
                <DarkModeSwitch onChange={() => {
                    storage.setTheme(theme === themes.light ? 'dark' : 'light');
                    setTheme(theme === themes.light ? themes.dark : themes.light);
                }} checked={theme === themes.dark} moonColor={theme.secondary} sunColor={theme.secondary}/>
            </div>
        </header>
    );
};

export { Header };
