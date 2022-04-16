import { useState, useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

interface Props {
    name: string,
    color: string,
}

const Deck = (props: Props) => {
    const [theme, ] = useContext(ThemeContext)
    const [isEngaged, setIsEngaged] = useState(false)

    const cards = []
    for (let i = 0; i < 3; i++) {
        cards.push(
            <div className='shadow-in-top-light' style={{
                position: 'absolute',
                backgroundColor: theme.deck_cards,
                width: isEngaged ? 198 : 180,
                height: isEngaged ? 80 : 72,
                top: 8*i,
                left: '50%',
                transform: 'translate(-50%, 0)',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                transition: 'width 100ms, height 100ms',
            }}/>
        )
    }

    return(
        <div style={{
            width: 220,
            height: 220,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <button style={{
                width: isEngaged ? 220 : 200,
                height: isEngaged ? 220 : 200,
                position: 'relative',
                padding: 0,
                border: 0,
                background: 'none',
                transition: 'width 100ms, height 100ms',
            }}
                onMouseEnter={() => {
                    setIsEngaged(true)
                }}
                onMouseLeave={() => {
                    setIsEngaged(false)
                }}>
                <div className='shadow-out-bottom' style={{
                    position: 'absolute',
                    width: '100%',
                    height: isEngaged ? 132 : 120,
                    bottom: 0,
                    backgroundColor: props.color,
                    borderRadius: 4,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: isEngaged ? 22 : 20,
                    transition: 'height 100ms, font-size 100ms',
                }}>{props.name}</div>
                {cards}
            </button>
        </div>
    )
};

export default Deck
