interface Props {
    status: string | undefined,
}

const StatusBar = (props: Props) => {
    return(
        <header style={{
            display: 'flex',
            height: '40px',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <p style={{
                fontSize: '20px',
                color: '#696969',
                fontStyle: props.status ? 'inherit' : 'italic',
            }}>{props.status ? props.status : '(no status)'}</p>
        </header>
    )
};

export default StatusBar
