export type DeckType = {
    id: number,
    name: string,
    color: string,
    public: boolean,
    owner: number,
};

export type DeckInfoType = {
    id: number,
    name: string,
    color: string,
    public: boolean,
    owner: number,
    description: string,
    card_number: number,
};

export type CardType = {
    id: number,
    question: string,
    answer: string,
    deck: number,
};
