/*\
These are accessable to auth'd users only.
So they are editmode and trainmode.
\*/

import { EditMode } from "features/editmode";
import { TrainMode } from "features/trainmode";

const protectedRoutes = [
    {
        path: '/:username/:deckname/edit',
        element: <EditMode/>,
    },
    {
        path: '/:username/:deckname/train',
        element: <TrainMode/>,
    },
];

export { protectedRoutes };
