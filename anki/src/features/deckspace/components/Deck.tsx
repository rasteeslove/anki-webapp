import { useState } from 'react'

import "./Deck.css"

interface Props {
    name: string,
    color: string,
    onClick: () => void,
}

const Deck = (props: Props) => {
    const [isEngaged, setIsEngaged] = useState(false)

    const cards = []
    for (let i = 0; i < 3; i++) {
        cards.push(
            <div className='shadow-in-top-light card' style={{
                width: isEngaged ? 198 : 180,
                height: isEngaged ? 80 : 72,
                top: 8*i,
            }}/>
        )
    }

    return(
        <div className='deck-wrapper'>
            <button className='button-wrapper' style={{
                width: isEngaged ? 220 : 200,
                height: isEngaged ? 220 : 200,
            }}
                onMouseOver={() => {
                    setIsEngaged(true)
                }}
                onMouseOut={() => {
                    setIsEngaged(false)
                }}
                onClick={() => {
                    props.onClick()
                    setIsEngaged(false)
                }}>
                <div className='shadow-out-bottom deck' style={{
                    height: isEngaged ? 132 : 120,
                    backgroundColor: props.color,
                    fontSize: isEngaged ? 22 : 20,
                }}>{props.name}</div>
                {cards}
            </button>
        </div>
    )
};

export { Deck }
