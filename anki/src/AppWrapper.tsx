import { useState } from 'react';
import { App } from 'App';
import { ThemeContext, themes } from 'context/ThemeContext';
import { MinimalismContext } from 'context/MinimalismContext';
import { UserContext } from 'context/UserContext';
import { storage } from 'utils/storage';

const AppWrapper = () => {
    const [theme, setTheme] = useState(themes[storage.getTheme()]);
    const [user, setUser] = useState(null);
    const isUserLoggedIn = () => {
        return !!user;
    }

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <MinimalismContext.Provider value={false}>
                <UserContext.Provider value={{user, setUser, isUserLoggedIn}}>
                    <App/>
                </UserContext.Provider>
            </MinimalismContext.Provider>
        </ThemeContext.Provider>
    );
};

export default AppWrapper;
