// import React, { useState } from "react";
// import Container from "../../components/Container";
// import Col from "../../components/Col";
// import Row from "../../components/Row";

// const SignupForm = () => {
//     const [username, setUsername] = useState();
//     const [password, setPassword] = useState();

//     const handleSubmit = e => {
//         e.preventDefault();
//         console.log("username is " + username);
//         console.log("password is " + password);
//     };
//     return (
//         <div>
//             <div className="mt-4">
//                 <h2>Welcome to Stock Game! Register here</h2>
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <Container className="mt-3 px-5">
//                     <Row className="form-group">
//                         <Col size="12">
//                             <input
//                                 className="form-control"
//                                 type="text"
//                                 placeholder="Username"
//                                 name="username"
//                                 onChange={e => setUsername(e.target.value)}
//                             />
//                         </Col>
//                     </Row>
//                     <Row className="form-group">
//                         <Col size="12">
//                             <input
//                                 className="form-control"
//                                 type="password"
//                                 placeholder="Password"
//                                 name="password"
//                                 onChange={e => setPassword(e.target.value)}
//                             />
//                         </Col>
//                     </Row>
//                     <button className="btn btn-success" type="submit">
//                         Submit
//           </button>
//                 </Container>
//                 <Container className="mt-4">
//                     <h3>Hello {username}!</h3>
//                     <p>I probably shouldn't tell you this, but your password is {password}!</p>
//                 </Container>
//             </form>
//         </div>
//     );
// };
// export default SignupForm;
import React, { Component } from 'react';
import API from '../../utils/API'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';

class Signup extends Component {
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
        API.signupUser(userData).then(res => {
            console.log(res);
            if (!res.data.errmsg) {
                console.log('successful signup')
                this.setState({ //redirect to welcome page
                    redirectTo: '/login'
                })
            } else {
                console.log('username already taken')
            }
        }).catch(error => {
            console.log('signup error: ')
            console.log(error)

        })
    }
    render() {
        return (
            <Container className="App">
                <h2>Sign Up</h2>
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

export default Signup;