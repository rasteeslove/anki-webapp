import { useRoutes } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "context/UserContext";

import { commonRoutes } from "./common";
import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";

/*\

A small documentation piece for me to remind myself what
exactly am I trying to do here:

Non-auth'd users can:
    1. authenticate, then be redirected to personal deckspace
    2. check out others' deckspaces and deckinfos

Auth'd users can, in addition to the above:
    3. edit their own decks and cards
    4. train on public decks of other users

\*/

const AppRoutes = () => {
    const {isUserLoggedIn} = useContext(UserContext);

    const routes = isUserLoggedIn() ? protectedRoutes : publicRoutes;

    const element = useRoutes([...routes, ...commonRoutes]);
    
    return(
        <>{element}</>
    );
};

export { AppRoutes }
