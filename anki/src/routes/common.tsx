/*\
In accordance to the docu piece in `index.tsx`, the common routes are:
    1. deckspaces
    2. deckinfos
\*/

import { DeckSpace, DeckInfo } from "features/deckspace";
import { RootComponent } from "features/misc";

const commonRoutes = [
    {
        path: '/:username',
        element: <DeckSpace/>,
        children: [
            { path: '/:username/:deckname', element: <DeckInfo/> },
        ],
    },
    {
        path: '/',
        element: <RootComponent/>,
    },
];

export { commonRoutes };
