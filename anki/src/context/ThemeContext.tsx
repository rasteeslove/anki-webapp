import { createContext } from "react";

export const themes = {
    'light': {
        'primary': '#FFB23E',
        'secondary': '#826CC2',
        'background': '#F3F3F3',
        'text': '#696969',
        'deck-cards': '#FFFFFF',
        'deck-name-inner': '#242424',
        'deck-name-outer': '#FFFFFF',
        'hover-pagey-thing': '#FFFFFF',
        'button-switch-on': '#A5A5A5',
        'button-switch-off': '#F3F3F3',
    },
    'dark': {
        'primary': '#826CC2',
        'secondary': '#FFB23E',
        'background': '#696969',
        'text': '#FFFFFF',
        'deck-cards': '#CDCDCD',
        'deck-name-inner': '#CDCDCD',
        'deck-name-outer': '#242424',
        'hover-pagey-thing': '#A5A5A5',
        'button-switch-on': '#696969',
        'button-switch-off': '#CDCDCD',
    }
}

export const ThemeContext = createContext(themes.light);
