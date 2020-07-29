import React, { Component } from 'react';
import API from '../../utils/API'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';

class Login extends Component {
    state = {
        username: "",
        password: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleClickSubmit = event => {
        event.preventDefault();
        const userData = {
            username: this.state.username,
            password: this.state.password
        }
        API.loginUser(userData).then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <Container className="App">
                <h2>Sign In</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                type="username"
                                name="username"
                                id="username"
                                placeholder="Your Username Here"
                                value={this.state.username}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                    <Button onClick={this.handleClickSubmit}>Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default Login;