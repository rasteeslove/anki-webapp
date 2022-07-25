import { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from 'components/Header';
import { ThemeContext } from 'context/ThemeContext';
import { AppRoutes } from 'routes';

import './index.css';

const App = () => {
    const [theme, ] = useContext(ThemeContext);

    return (
        <div id='App' style={{
            backgroundColor: theme.background,
        }}>
            <Router>
                <Header/>
                { /* SubHeader to be moved here in order to 
                     provide a prompt-based navigation tool
                     for the whole app */ }
                <AppRoutes/>
            </Router>
        </div>
    );
};

export { App };
