import { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header, StatusBar } from 'components';
import { ThemeContext } from 'context/ThemeContext';
import { AppRoutes } from 'routes';

import './index.scss';

const App = () => {
    const [theme, ] = useContext(ThemeContext);

    return (
        <div id='App' style={{
            backgroundColor: theme.background,
        }}>
            <Router>
                <Header/>
                <StatusBar/>
                <AppRoutes/>
            </Router>
        </div>
    );
};

export { App };
