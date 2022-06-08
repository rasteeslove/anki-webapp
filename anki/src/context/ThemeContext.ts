import { createContext } from "react";

type themeType = {
    [key: string]: object,
};

export const themes: themeType = {
    'light': {
        'primary': '#FFB23E',
        'secondary': '#826CC2',
        'background': '#E3E3E3',
        'middleground': '#FFFFFF',
        'foreground': '#F3F3F3',
        'pressed_in': '#A5A5A5',
        'text': '#696969',
        'pressed_in_text': '#FFFFFF',
        'deck_name_inner': '#242424',
        'deck_name_outer': '#FFFFFF',
    },
    'dark': {
        'primary': '#826CC2',
        'secondary': '#FFB23E',
        'background': '#808080',
        'middleground': '#A5A5A5',
        'foreground': '#909090',
        'pressed_in': '#696969',
        'text': '#FFFFFF',
        'pressed_in_text': '#FFFFFF',
        'deck_name_inner': '#CDCDCD',
        'deck_name_outer': '#242424',
    },
};

// any type bc it would be the useState type: [theme, setTheme]
export const ThemeContext = createContext<any>(undefined);
