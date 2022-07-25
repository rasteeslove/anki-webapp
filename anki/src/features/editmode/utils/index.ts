import { DeckStuffDTO } from "../types";

const sameDeckStuff = (a: DeckStuffDTO, b: DeckStuffDTO) : boolean => {
    return JSON.stringify(a) === JSON.stringify(b);
}

export { sameDeckStuff };
