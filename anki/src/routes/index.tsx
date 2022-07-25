import { useRoutes } from "react-router-dom";

import { commonRoutes } from "./common";
import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";

/*\

A small documentation piece for me to remind myself what
exactly am I trying to do here:

Non-auth'd users can:
    1. authenticate, then be redirected to personal deckspace
    2. check out others' deckspaces and deckinfos

Auth'd users can, in addition to #2:
    3. edit their own decks and cards
    4. train on public decks of other users

\*/

const AppRoutes = () => {
    const element = useRoutes([...protectedRoutes,
                               ...publicRoutes,
                               ...commonRoutes]);

    return(
        <>{element}</>
    );
};

export { AppRoutes }
