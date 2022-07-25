import { axios } from 'lib/axios';
import { DeckInfoType, DeckType } from "types";

const getDecks = async (username: string) : Promise<Array<DeckType>> => {
    return axios
        .get('/get-decks', {
            params: { username },
        }).then(res => res.data);
};

const getDeckInfo = async (username: string, deckname: string) : Promise<DeckInfoType> => {
    return axios
        .get('/get-deck-info', {
            params: { username, deckname },
        }).then(res => res.data);
};

export { getDecks, getDeckInfo };
