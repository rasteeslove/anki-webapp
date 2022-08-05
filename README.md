# anki-webapp

My shot at creating a personal use [_Anki_](https://apps.ankiweb.net)-like webapp for stuff memorization. Spaced repetition is a great tool for learning, and I've always wanted to make an app using algorithms facilitating it.

## Rationale

### What's Anki

Here is a set of videos, articles, and whatnot explaining the whole deal:
- [Ali Abdaal](https://aliabdaal.com)'s videos on [study techniques](https://www.youtube.com/watch?v=ukLnPbIffxE), [learning stuff](https://www.youtube.com/watch?v=unityETmypk), and [using Anki itself](https://www.youtube.com/watch?v=W-EpiaPcgTk)
- [Anki subreddit](https://www.reddit.com/r/Anki/)

### Why reinvent the wheel

For ultimate customization, i.e. to explore and gain more control over the underlying algorithm to better utilize it.

## Design

### General

This app adopts some practices from the [Bulletproof React](https://github.com/alan2207/bulletproof-react) architecture.

### Appearance

Figma mockup is [here](https://www.figma.com/file/0R1rTfcYHTo10Wi72FazAE/Web?node-id=0%3A1).

### Tools

- React
- Typescript
- Pure CSS
- Axios
- Vercel

### Challenges

**Markdown & LaTeX** rendering in description and cards. The most probable solution to this is [react-markdown](https://github.com/remarkjs/react-markdown).

**Media** rendering in descriptions and cards. Might be a little excessive but it would certainly be a cool addition.

**TextArea editing** for Markdown & LaTeX.

## Other important notes

### Security

Right now, JWT tokens are stored in localStorage on the client side. That is to be changed later (in favor of cookies) to avoid XSS attacks.
