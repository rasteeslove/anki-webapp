/*\
These are accessable to non-auth'd users only.
So they are basically routes related to auth, i.e. login and register.
\*/

import { AuthRoutes } from "features/auth/routes";

const publicRoutes = [
    {
        path: '/auth/*',
        element: <AuthRoutes/>,
    },
];

export { publicRoutes };
