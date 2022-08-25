import React, { useContext, useState } from 'react';
import { ThemeContext } from 'context/ThemeContext';

import "./styles/MarkdownTextArea.scss";

interface Props {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

const MarkdownTextArea = (props: Props) => {
    const [theme, ] = useContext(ThemeContext);
    const [value, setValue] = useState<string>(props.value);

    return(
        <div className='shadow-in-top md-wrapper' style={{
            backgroundColor: theme.foreground,
            borderRadius: '20px 20px 0px 0px',
        }}>
            <textarea className='md-area'
                      defaultValue={value}
                      onChange={(event) => {
                          setValue(event.target.value);
                          props.onChange(event);
                      }}
                      style={{
                          color: theme.text,
                          borderRadius: '20px 20px 0px 0px',
                      }}/>
        </div>
    );
};

export { MarkdownTextArea };
