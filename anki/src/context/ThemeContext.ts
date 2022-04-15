import { createContext } from "react";

type themeType = {
    [key: string]: object,
}

export const themes: themeType = {
    'light': {
        'primary': '#FFB23E',
        'secondary': '#826CC2',
        'background': '#F3F3F3',
        'text': '#696969',
        'deck_cards': '#FFFFFF',
        'deck_name_inner': '#242424',
        'deck_name_outer': '#FFFFFF',
        'foreground': '#FFFFFF',
        'button_switch_on': '#A5A5A5',
        'button_switch_off': '#F3F3F3',
    },
    'dark': {
        'primary': '#826CC2',
        'secondary': '#FFB23E',
        'background': '#696969',
        'text': '#FFFFFF',
        'deck_cards': '#CDCDCD',
        'deck_name_inner': '#CDCDCD',
        'deck_name_outer': '#242424',
        'foreground': '#A5A5A5',
        'button_switch_on': '#696969',
        'button_switch_off': '#CDCDCD',
    }
}

// any type bc it would be the useState type: [theme, setTheme]
export const ThemeContext = createContext<any>(undefined);
