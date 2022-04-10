import { createContext } from "react";

// any type bc it would be the useState type: [minimalism, setMinimalism]
export const MinimalismContext = createContext<any>(false);
