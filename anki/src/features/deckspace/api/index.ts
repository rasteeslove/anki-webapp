import { axios } from 'lib/axios';

const getDecks = async (username: string) => {
    return axios
        .get('/get-decks', {
            params: { username },
        }).then(res => res.data);
};

const getDeckInfo = async (username: string, deckname: string) => {
    return axios
        .get('/get-deck-info', {
            params: { username, deckname },
        }).then(res => res.data);
};

export { getDecks, getDeckInfo };
