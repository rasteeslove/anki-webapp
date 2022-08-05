import { axios } from 'lib/axios';
import { DeckStuffDTO } from "../types";

const getDeckStuff = async (username: string, deckname: string) : Promise<DeckStuffDTO> => {
    return axios
        .get('/get-deck-stuff', {
            params: { username, deckname },
        }).then(res => res.data);
};

const updateDeckStuff = async (username:string, deckStuff: DeckStuffDTO) : Promise<DeckStuffDTO> => {
    return axios
        .post('/update-deck-stuff', deckStuff, {
            params: { username },
        })
        .then(res => res.data);
};

export { getDeckStuff, updateDeckStuff };
