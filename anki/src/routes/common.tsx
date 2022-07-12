/*\
In accordance to the docu piece in `index.tsx`, the common routes are:
    1. deckspaces
    2. deckinfos
\*/

import { DeckSpace, DeckInfo } from "features/deckspace";

const commonRoutes = [
    {
        path: '/:username',
        element: <DeckSpace/>,
        children: [
            { path: '/:username/:deckname', element: <DeckInfo/> },
        ],
    },
];

export { commonRoutes };
