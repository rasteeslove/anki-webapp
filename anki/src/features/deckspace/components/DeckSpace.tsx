import FadeInOut from "../../../components/FadeInOut";

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
            <FadeInOut show={props.blurred} duration={100} style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backdropFilter: 'blur(10px)',
            }}>
            </FadeInOut>
        </div>
    )
};

export default DeckSpace
