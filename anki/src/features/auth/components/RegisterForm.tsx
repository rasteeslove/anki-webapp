import React from "react";
import { Navigate } from "react-router-dom";
import { signupWithUsernameAndEmailAndPassword, RegisterCredsDTO } from "../api/register";
import { AlertWindow, PlainInput, ButtonSwitch } from "components";
import './styles/Form.scss';

type LoginHelperType = {
    signupSucceeded: boolean,
    moveToLogin: boolean,
};

class RegisterForm extends React.Component<any, RegisterCredsDTO & LoginHelperType> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            signupSucceeded: false,
            moveToLogin: false, };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event: any) {
        this.setState({ username: event.target.value });
    }

    handleEmailChange(event: any) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event: any) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event: any) {
        console.log(this.state);

        signupWithUsernameAndEmailAndPassword(this.state)
            .then(data => {
                console.log('Sign up succeeded!');
                console.log(data);

                // TODO: change the following or make the user verify the email
                //       before being able to log in
                console.log('Now sending you to the login page instead of your deckspace')
                this.setState({ signupSucceeded: true });
            })
            .catch((error) => {
                console.log('Sign up failed with these creds');
                console.log(error);
            })

        event.preventDefault();
    }

    render() {
        return(
            <AlertWindow>
                Register Form
                <form className='form-main' onSubmit={this.handleSubmit} >
                    username:
                    <PlainInput type='text' name='username'
                                value={this.state.username} onChange={(event) => this.handleUsernameChange(event)}
                                maxLength={20}
                                width={220} height={32} />
                    email:
                    <PlainInput type='text' name='email'
                                value={this.state.email} onChange={(event) => this.handleEmailChange(event)}
                                maxLength={20}
                                width={220} height={32} />
                    password:
                    <PlainInput type='password' name='password'
                                value={this.state.password} onChange={(event) => this.handlePasswordChange(event)}
                                maxLength={20}
                                width={220} height={32} />
                    <ButtonSwitch text='submit' is_on={false}
                                  width={220} height={32} fontSize={16}/>
                </form>
                <ButtonSwitch text='to to login page' is_on={false}
                              onClick={() => {
                                  this.setState({ moveToLogin: true });
                              }}
                              width={220} height={32} fontSize={16}/>
                { (this.state.moveToLogin || this.state.signupSucceeded) &&
                    <Navigate to='/auth/login' replace={false}/> }
            </AlertWindow>
        );
    }
}

export { RegisterForm };
