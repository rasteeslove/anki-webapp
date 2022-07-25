import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "context";
import "./RootComponent.css";

const RootComponent = () => {
    const [theme, ] = useContext(ThemeContext);

    return(
        <div className='root-component'>
            <div className='shadow-out-bottom root-main' style={{
                backgroundColor: theme.middleground,
                color: theme.text,
            }}>
                <div className='text-container'>
                    Hi 👋
                    <br/>
                    <br/>
                    This is my app for studying.
                    <br/>
                    { /* TODO: add link to the Rationale section in README in the line below */ }
                    You can learn more about Anki <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>here</a>.
                    <br/>
                    <br/>
                    And <Link to='/auth/login'>here</Link> you can login or register.
                </div>
            </div>
        </div>
    );
};

export { RootComponent };
