import { useContext } from 'react'
import { ThemeContext } from 'context/ThemeContext' 

interface Props {
    borderRadius?: string,
}

const MarkdownTextArea = (props: Props) => {
    const [theme, ] = useContext(ThemeContext)

    return(
        <div className='shadow-in-top' style={{
            height: '100%',
            width: '100%',
            maxWidth: 720,
            backgroundColor: theme.foreground,
            borderRadius: props.borderRadius ? props.borderRadius : '20px 20px 0px 0px',
        }}>
            <textarea style={{
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                background: 'transparent',
                border: 'none',
                padding: 20,
                fontSize: 16,
                color: theme.text,
                borderRadius: props.borderRadius ? props.borderRadius : '20px 20px 0px 0px',
                resize: 'none',
            }}/>
        </div>
    )
};

export default MarkdownTextArea
