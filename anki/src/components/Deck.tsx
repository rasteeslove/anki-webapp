import { useState } from 'react';

import "./styles/Deck.scss";

interface Props {
    name: string,
    color: string,
    onClick?: () => void,
    isDecky?: boolean,
}

const DeckParams = {
    full_size_small: 200,
    full_size_big: 220,
    card_width_small: 180,
    card_width_big: 198,
    card_height_small: 72,
    card_height_big: 80,
    deck_height_small: 120,
    deck_height_big: 132,
    font_size_small: 20,
    font_size_big: 22,
};

const DeckyParams = {
    full_size_small: 100,
    full_size_big: 110,
    card_width_small: 90,
    card_width_big: 99,
    card_height_small: 36,
    card_height_big: 40,
    deck_height_small: 60,
    deck_height_big: 66,
    font_size_small: 10,
    font_size_big: 11,
};

const Deck = (props: Props) => {
    const [isEngaged, setIsEngaged] = useState(false);

    const params = props.isDecky ? DeckyParams : DeckParams;
    
    const cards = [];
    for (let i = 0; i < 3; i++) {
        cards.push(
            <div key={i} className='shadow-in-top-light card' style={{
                width: isEngaged ? params?.card_width_big : params.card_width_small,
                height: isEngaged ? params.card_height_big : params.card_height_small,
                top: 8*i,
            }}/>
        );
    }

    return(
        <div className='deck-wrapper'>
            <button className='button-wrapper' style={{
                width: isEngaged ? params.full_size_big : params.full_size_small,
                height: isEngaged ? params.full_size_big : params.full_size_small,
            }}
                onMouseOver={() => {
                    setIsEngaged(true);
                }}
                onMouseOut={() => {
                    setIsEngaged(false);
                }}
                onClick={() => {
                    if (props.onClick) { 
                        props.onClick();
                    }
                    setIsEngaged(false);
                }}>
                <div className='shadow-out-bottom deck' style={{
                    height: isEngaged ? params.deck_height_big : params.deck_height_small,
                    backgroundColor: props.color,
                    fontSize: isEngaged ? params.font_size_big : params.font_size_small,
                }}>{props.name}</div>
                {cards}
            </button>
        </div>
    );
};

export { Deck };
