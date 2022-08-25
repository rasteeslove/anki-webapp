import { axios } from 'lib/axios';
import { ResponseType, DeckInfoResponseType, DecksResponseType } from "types";

const getDecks = async (username: string) : Promise<DecksResponseType> => {
    return axios
        .get('/get-decks', {
            params: { username },
        }).then(res => res.data);
};

const getDeckInfo = async (username: string, deckname: string) : Promise<DeckInfoResponseType> => {
    return axios
        .get('/get-deck-info', {
            params: { username, deckname },
        }).then(res => res.data);
};

const removeDeck = async (username: string, deckname: string) : Promise<ResponseType> => {
    return axios
        .post('/remove-deck/', {
            username, deckname
        })
        .then(res => res.data);
}

const createDeck = async (username: string) : Promise<DecksResponseType> => {
    return axios
        .post('/create-deck/', {
            username
        })
        .then(res => res.data);
}

export { getDecks, getDeckInfo, removeDeck, createDeck };
