import React, { Component } from 'react';
import './Login.css';
import Header from '../../common/header/Header';
import { Card, CardContent, FormControl, InputLabel,
    Input, Button, Typography, FormHelperText } from '@material-ui/core';

/*Class component Login defined with constructor & it's states */

class Login extends Component {

    constructor() {
        super();
        this.state = {
            anchorEl: null,
            incorrectCred: "display-none",
            reqUsername: "display-none",
            reqPass: "display-none",
            username: "",
            password: "",
            loggedIn: sessionStorage.getItem("access-token") == null ? false : true
        }
    }

    loginClickHandler = () => {
                
        const dummyUsername = 'mayank.upgrad';
        const dummyPass = 'mayank@123';
        const token = 'IGQVJXcDVlXy1xZAE02NTR0b19kdldPUmNGbVVySkgwTzU5N0R2U1JfRzJTOVo3R0ZAnckpURmZALUXRUN2c3SVhIRjRldU0tZA3lmR3FyV2k1WUJCZAXlmd1dla2JEVlI5RF9abW9xS0FhQkYxZAWVzSFI1cAZDZD'

        if (this.state.username === dummyUsername && this.state.password === dummyPass) {
            window.sessionStorage.setItem("access-token", token);
            this.props.history.push('/home');
        }

        this.state.username === "" ?
            this.setState({ reqUsername: "display-block" }) :
            this.setState({ reqUsername: "display-none" });
        this.state.password === "" ?
            this.setState({ reqPass: "display-block" }) :
            this.setState({ reqPass: "display-none" });

        (this.state.username !== "" && this.state.password !== "" &&
            (this.state.username !== dummyUsername || this.state.password !== dummyPass)) ?
                this.setState({ incorrectCred: "display-block" }) :
                this.setState({ incorrectCred: "display-none" });

    }

    usernameChangeHandler = (e) => {
        this.setState({ username: e.target.value })
    }

    passwordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    /* Rendering JSX elements on the Login Page as per the design requirements */

    render() {

        return (

            <div>
                <Header heading="Image Viewer" />
                <div className="card-style">
                    <Card>
                        <CardContent>
                            <Typography variant="title">LOGIN</Typography>
                            <br />
                            <FormControl required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" username={this.state.username} 
                                    onChange={this.usernameChangeHandler} />
                                <FormHelperText className={this.state.reqUsername}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <FormControl required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" password={this.state.password} 
                                    onChange={this.passwordChangeHandler} />
                                <FormHelperText className={this.state.reqPass}>
                                    <span className="red">required</span>
                                </FormHelperText>
                                <br />
                                <FormHelperText className={this.state.incorrectCred}>
                                    <span className="red">Incorrect username and/or password</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>
                                LOGIN
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Login;