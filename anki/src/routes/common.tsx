/*\
In accordance to the docu piece in `index.tsx`, the common routes are:
    1. deckspaces
    2. deckinfos
\*/

import { DeckSpace } from "features/deckspace";

const commonRoutes = [
    {
        path: '/:username',
        element: <DeckSpace/>,
    },
    /* deck info to be added
       probably as a child of deckspace route */
];

export { commonRoutes };
