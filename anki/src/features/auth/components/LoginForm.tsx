import React from "react";
import { Navigate } from "react-router-dom";
import { loginWithUsernameAndPassword, LoginCredsDTO } from "../api/login";
import { storage } from "utils/storage";
import { AlertWindow, PlainInput, ButtonSwitch } from "components";
import './styles/LoginForm.scss';

type LoginHelperType = {
    loginSucceeded: boolean,
};

class LoginForm extends React.Component<any, LoginCredsDTO & LoginHelperType> {
    constructor(props: any) {
        super(props);
        this.state = { username: '',
                       password: '',
                       loginSucceeded: false, };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event: any) {
        this.setState({ username: event.target.value });
    }

    handlePasswordChange(event: any) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event: any) {
        console.log(this.state);

        loginWithUsernameAndPassword(this.state)
            .then(data => {
                console.log('Login succeeded!');
                console.log(data);
                storage.setAccessToken(data.access);
                storage.setRefreshToken(data.refresh);

                this.setState({ loginSucceeded: true });
            })
            .catch((error) => {
                console.log('Login failed with these creds');
                console.log(error);
            })

        event.preventDefault();
    }

    render() {
        return(
            <AlertWindow>
                Login Form
                <form className='login-form' onSubmit={this.handleSubmit} >
                    username:
                    <PlainInput type='text' name='username'
                                value={this.state.username} onChange={(event) => this.handleUsernameChange(event)}
                                width={220} height={32} />
                    password:
                    <PlainInput type='password' name='password'
                                value={this.state.password} onChange={(event) => this.handlePasswordChange(event)}
                                width={220} height={32} />
                    <ButtonSwitch text='submit' is_on={false}
                                  width={220} height={32}/>
                </form>
                { this.state.loginSucceeded &&
                  <Navigate to={`/${this.state.username}`} replace={true}/> }
            </AlertWindow>
        );
    }
}

export { LoginForm };
