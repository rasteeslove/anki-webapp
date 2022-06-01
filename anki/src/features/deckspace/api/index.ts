import axios from 'axios';
import { API_URL } from 'config';

const getDecks = async (username: string) => {
    return axios
        .get(`${API_URL}/get-decks`, {
            params: { username },
        }).then(res => res.data);
};

export { getDecks };
