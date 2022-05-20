import { useState } from 'react'

interface Props {
    name: string,
    color: string,
}

const Decky = (props: Props) => {
    const [isEngaged, setIsEngaged] = useState(false)

    const cards = []
    for (let i = 0; i < 3; i++) {
        cards.push(
            <div className='shadow-in-top-light card' style={{
                width: isEngaged ? 99 : 90,
                height: isEngaged ? 40 : 36,
                top: 4*i,
            }}/>
        )
    }

    return(
        <div className='deck-wrapper'>
            <button className='button-wrapper' style={{
                width: isEngaged ? 110 : 100,
                height: isEngaged ? 110 : 100,
            }}
                onMouseOver={() => {
                    setIsEngaged(true)
                }}
                onMouseOut={() => {
                    setIsEngaged(false)
                }}>
                <div className='shadow-out-bottom deck' style={{
                    height: isEngaged ? 66 : 60,
                    backgroundColor: props.color,
                    fontSize: isEngaged ? 11 : 10,
                }}>{props.name}</div>
                {cards}
            </button>
        </div>
    )
};

export { Decky }
