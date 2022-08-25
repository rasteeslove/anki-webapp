import { axios } from "lib/axios";
import { ResponseType, CardResponseType } from "types";

const pullNextCard = async (deckOwnerUsername: string,
                            deckname: string) : Promise<CardResponseType> => {
    return axios
        .get('/pull-next-card', {
            params: {
                deck_owner_username: deckOwnerUsername,
                deckname
            },
        }).then(res => res.data);
};

const postFeedback = async (deckOwnerUsername: string,
                            deckname: string,
                            cardId: number,
                            feedback: boolean) : Promise<ResponseType> => {
    return axios
        .post('/post-feedback/', {
            deck_owner_username: deckOwnerUsername,
            card_id: cardId,
            deckname, feedback
        }).then(res => res.data);
};

export { pullNextCard, postFeedback };
