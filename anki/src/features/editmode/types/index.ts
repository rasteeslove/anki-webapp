export type DeckInfoDTO = {
    id: number,
    name: string,
    color: string,
    public: boolean,
    owner: number,
    description: string,
};

export type CardDTO = {
    id: number,
    question: string,
    answer: string,
    deck: string,
};

export type DeckStuffDTO = {
    deck: DeckInfoDTO,
    cards: Array<CardDTO>,
};
