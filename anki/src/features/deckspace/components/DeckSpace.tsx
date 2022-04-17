const DeckSpace = (props: any) => {
    return(
        <div style={{
            position: 'relative',
            width: 800, // tmp
            height: 'min-content',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingTop: 40,
            paddingBottom: 40,
            gap: 40,
        }}>
            {props.children}
            <div style={{
                visibility: props.blurred ? 'visible' : 'hidden',
                position: 'absolute',
                width: '100%',
                height: '100%',
                backdropFilter: 'blur(10px)',
            }} onClick={() => {props.deblur()}}/>
        </div>
    )
};

export default DeckSpace
