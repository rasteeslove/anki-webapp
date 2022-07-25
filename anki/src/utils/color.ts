/*\
This file contains helper functions to better manage
and display colors.

e.g.:
    text color (dark/light) depending on background color:
        black -> light
        white -> dark
        yellow -> dark
        very light blue -> dark
        dark red -> light
\*/

enum Color {
    Dark,
    Light,
}

const getColorForBackground = (background: string) : Color => {
    throw Error('not implemented');
}

export { getColorForBackground };
