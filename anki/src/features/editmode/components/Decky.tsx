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
            <div className='shadow-in-top-light' style={{
                position: 'absolute',
                backgroundColor: '#FFFFFF',
                width: isEngaged ? 99 : 90,
                height: isEngaged ? 40 : 36,
                top: 4*i,
                left: '50%',
                transform: 'translate(-50%, 0)',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                transition: 'width 100ms, height 100ms',
            }}/>
        )
    }

    return(
        <div style={{
            width: 110,
            height: 110,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <button style={{
                width: isEngaged ? 110 : 100,
                height: isEngaged ? 110 : 100,
                position: 'relative',
                padding: 0,
                border: 0,
                background: 'none',
                transition: 'width 100ms, height 100ms',
            }}
                onMouseOver={() => {
                    setIsEngaged(true)
                }}
                onMouseOut={() => {
                    setIsEngaged(false)
                }}>
                <div className='shadow-out-bottom' style={{
                    position: 'absolute',
                    width: '100%',
                    height: isEngaged ? 66 : 60,
                    bottom: 0,
                    backgroundColor: props.color,
                    borderRadius: 4,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: isEngaged ? 11 : 10,
                    transition: 'height 100ms, font-size 100ms',
                }}>{props.name}</div>
                {cards}
            </button>
        </div>
    )
};

export { Decky }
