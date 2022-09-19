import React from "react";
import { Navigate } from "react-router-dom";
import { getMe } from "api";
import { loginWithUsernameAndPassword, LoginCredsDTO } from "../api/login";
import { storage } from "utils/storage";
import { AlertWindow, PlainInput, ButtonSwitch } from "components";
import './styles/Form.scss';

type LoginHelperType = {
    loginSucceeded: boolean,
    moveToSignUp: boolean,
};

class LoginForm extends React.Component<any, LoginCredsDTO & LoginHelperType> {
    constructor(props: any) {
        super(props);
        this.state = { username: '',
                       password: '',
                       loginSucceeded: false,
                       moveToSignUp: false, };

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
            })
            .then(() => {
                getMe().then(data => {
                    storage.setUsername(data.user!.username);
                    this.setState({ loginSucceeded: true });
                })
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
                <form className='form-main' onSubmit={this.handleSubmit} >
                    username:
                    <PlainInput type='text' name='username'
                                value={this.state.username} onChange={(event) => this.handleUsernameChange(event)}
                                maxLength={30}
                                width={220} height={32} />
                    password:
                    <PlainInput type='password' name='password'
                                value={this.state.password} onChange={(event) => this.handlePasswordChange(event)}
                                maxLength={30}
                                width={220} height={32} />
                    <ButtonSwitch text='submit' is_on={false}
                                  width={220} height={32} fontSize={16}/>
                </form>
                <div style={{
                    fontStyle: 'italic',
                    fontSize: 16
                }}>
                    (note that you can sign in only after you verify your email)
                </div>
                { this.state.loginSucceeded &&
                  <Navigate to={`/${this.state.username}`} replace={true}/> }
                <ButtonSwitch text='to to sign up page' is_on={false}
                              onClick={() => {
                                    this.setState({ moveToSignUp: true });
                              }}
                              width={220} height={32} fontSize={16}/>
                { this.state.moveToSignUp &&
                    <Navigate to='/auth/register' replace={false}/> }
            </AlertWindow>
        );
    }
}

export { LoginForm };
