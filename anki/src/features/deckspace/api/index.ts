import { axios } from 'lib/axios';
import { API_URL } from 'config';

const getDecks = async (username: string) => {
    return axios
        .get(`${API_URL}/get-decks`, {
            params: { username },
        }).then(res => res.data);
};

const getDeckInfo = async (username: string, deckname: string) => {
    return axios
        .get(`${API_URL}/get-deck-info`, {
            params: { username, deckname },
        }).then(res => res.data);
};

export { getDecks, getDeckInfo };
