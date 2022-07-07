# The Anki-like webapp

My shot at creating a personal use [_Anki_](https://en.wikipedia.org/wiki/Anki_(software))-like webapp for stuff memorization. Spaced repetition is a great tool for learning and I've always wanted to make an app using algorithms facilitating it.

### Rationale

Here is a set of videos and/or articles explaining the whole deal:
- https://www.youtube.com/watch?v=ukLnPbIffxE;
- I don't remember the other ones lol (I will add them later)

### Design

Here is what to actually do, and how.

#### Base

- Authentication;
- No third-party CSS libraries, just plain CSS;
- ~Hype~Typescript;
- [Figma mock-up](https://www.figma.com/file/0R1rTfcYHTo10Wi72FazAE/Web?node-id=0%3A1);
- Smart system "under the hood";
- Cards supporting markdown and LaTeX;

#### App's functions

- CRUD decks;
- CRUD cards in decks;
- Repetition sessions;
- User progress reports;

### Other important notes

#### Security

Right now, JWT tokens are stored in localStorage on the client side. That is to be changed later (in favor of cookies) to avoid XSS attacks.
