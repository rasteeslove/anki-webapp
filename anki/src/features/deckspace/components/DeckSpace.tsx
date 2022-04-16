const DeckSpace = (props: any) => {
    return(
        <div style={{
            width: 800, // tmp
            height: 'min-content',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingTop: 40,
            gap: 40,
        }}>
            {props.children}
        </div>
    )
};

export default DeckSpace
