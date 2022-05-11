import { StatusBar } from "components/StatusBar";

const EditMode = () => {
    return(
        <div style={{
            position: 'absolute',
            top: 40,
            bottom: 0,
            left: 0,
            right: 0,
        }}>
            <StatusBar status={'the "Spanish" deck: editing mode'}/>
        </div>
    )
}

export { EditMode }
