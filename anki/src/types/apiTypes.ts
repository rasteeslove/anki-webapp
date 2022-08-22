export type ResponseType = {
    code: string,
    message: string,
};

export type UserType = {
    id: number,
    last_login: string,
    username: string,
    email: string,
    date_joined: string,
};

export interface UserResponseType extends ResponseType {
    user: UserType | undefined,
}

export type DeckType = {
    id: number,
    name: string,
    color: string,
    public: boolean,
    owner: number,
};

export interface DecksResponseType extends ResponseType {
    decks: Array<DeckType>,
}

export type DeckInfoType = {
    id: number,
    name: string,
    color: string,
    public: boolean,
    owner: number,
    description: string,
    card_number: number,
};

export interface DeckInfoResponseType extends ResponseType {
    deckinfo: DeckInfoType,
}

// TODO: Maybe add DeckStat type and DeckStatResponseType

export type CardType = {
    id: number,
    question: string,
    answer: string,
    deck: number,
};

export interface DeckStuffResponseType extends ResponseType {
    deck: DeckInfoType,
    cards: Array<CardType>,
}

export interface CardResponseType extends ResponseType {
    card: CardType | undefined,
}
