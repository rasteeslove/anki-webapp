import { Link } from "react-router-dom";
import { MiddleGroundPanel } from "components";
import "./RootComponent.scss";

const RootComponent = () => {
    return(
        <div className='root-component'>
            <MiddleGroundPanel className='shadow-out-bottom root-main'>
                <div className='text-container'>
                    Hi 👋
                    <br/>
                    <br/>
                    This is my app for studying.
                    <br/>
                    You can learn more about Anki <a href='https://github.com/rasteeslove/anki-webapp#rationale'>here</a>.
                    <br/>
                    <br/>
                    And <Link to='/auth/login'>here</Link> you can login or register.
                </div>
            </MiddleGroundPanel>
        </div>
    );
};

export { RootComponent };
