import React from "react";
import { loginWithUsernameAndPassword, LoginCredsDTO } from "../api/login";

class LoginForm extends React.Component<any, LoginCredsDTO> {
    constructor(props: any) {
        super(props);
        this.state = { username: '', password: '', };

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

        loginWithUsernameAndPassword(this.state).then(data => console.log(data));

        event.preventDefault();
    }

    render() {
        return(
            <div style={{
                position: 'absolute',
                display: 'flex',
                width: '100%',
                top: 40,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <form style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 20,
                    flexDirection: 'column',
                }} onSubmit={this.handleSubmit} >
                    Login Form
                    <input type='text' name='username' style={{
                        background: '#ffffff',
                    }} placeholder='username'
                       onChange={this.handleUsernameChange} />
                    <input type='password' name='password' style={{
                        background: '#ffffff',
                    }} placeholder='password'
                       onChange={this.handlePasswordChange} />
                    <input type='submit' value='submit'/>
                </form>
            </div>
        );
    }
}

export { LoginForm };
