import { axios } from "lib/axios";
import { CardType } from "types";

const pullNextCard = async (deckOwnerUsername: string,
                            deckname: string) : Promise<CardType> => {
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
                            feedback: boolean) => {
    return axios
        .post('/post-feedback/', {
            deck_owner_username: deckOwnerUsername,
            card_id: cardId,
            deckname, feedback
        }).then(res => res.data);
};

export { pullNextCard, postFeedback };
