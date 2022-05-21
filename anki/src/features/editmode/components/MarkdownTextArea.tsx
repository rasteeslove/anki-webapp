import { useContext } from 'react'
import { ThemeContext } from 'context/ThemeContext' 

import "./MarkdownTextArea.css"

interface Props {
    borderRadius?: string,
}

const MarkdownTextArea = (props: Props) => {
    const [theme, ] = useContext(ThemeContext)

    return(
        <div className='shadow-in-top md-wrapper' style={{
            backgroundColor: theme.foreground,
            borderRadius: props.borderRadius ? props.borderRadius : '20px 20px 0px 0px',
        }}>
            <textarea className='md-area' style={{
                color: theme.text,
                borderRadius: props.borderRadius ? props.borderRadius : '20px 20px 0px 0px',
            }}/>
        </div>
    )
};

export default MarkdownTextArea
