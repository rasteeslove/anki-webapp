import { useState } from 'react';

import "components/styles/Deck.scss";

interface Props {
    onClick?: () => void,
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

const AddDeck = (props: Props) => {
    const [isEngaged, setIsEngaged] = useState(false);

    const params = DeckParams;

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
                    fontSize: isEngaged ? params.font_size_big : params.font_size_small,
                    backgroundImage: 'linear-gradient(to bottom right, #826CC2,#FFB23E)',
                    fontStyle: 'italic'
                }}>New Deck</div>
                {cards}
            </button>
        </div>
    );
};

export { AddDeck };
