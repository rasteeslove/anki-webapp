import { createContext } from "react";

/*
This context facilitates minimalist mode, in which the app mainly
relies on the keyboard user input and there are only a few
UI in-app buttons.
*/

// any type bc it would be the useState type: [minimalism, setMinimalism]
export const MinimalismContext = createContext<any>(false);
