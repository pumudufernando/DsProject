import React, {Component} from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
} from "mdbreact";


const browserHistory = createBrowserHistory();

export default class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            login: false,
            users: []
        };
    }


    render() {

        const loginToSystem = () => {
            // console.log(this.state.users);
            if (this.state.username === 'user@gmail.com' && this.state.password === 'pass')
                browserHistory.push('/MainPage');
        }
        return (< div>

                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="10">
                            <MDBCard style={{  marginLeft: "20rem" }}>
                                <MDBCardBody>
                                    <MDBCardHeader className="form-header deep-blue-gradient rounded">
                                        <h3 className="my-3">
                                            <MDBIcon icon="lock" /> Login:
                                        </h3>
                                    </MDBCardHeader>
                                    <form>
                                        <div className="grey-text">
                                            <MDBInput
                                                label="Type your email or Username"
                                                icon="envelope"
                                                group
                                                onChange={username => this.updateUsername(username)} required
                                                type="email"
                                                validate
                                                placeholder="user@gmail.com"
                                                error="wrong"
                                                success="right"
                                            />
                                            <MDBInput
                                                label="Type your password"
                                                icon="lock"
                                                onChange={password => this.updatePassword(password)} required
                                                group
                                                placeholder="pass"
                                                type="password"
                                                validate
                                            />
                                        </div>

                                        <div className="text-center mt-4">
                                            <MDBBtn
                                                color="light-blue"
                                                className="mb-3"
                                                type="submit"
                                                onClick={loginToSystem}
                                            >
                                                Login
                                            </MDBBtn>
                                        </div>
                                    </form>
                                    <MDBModalFooter>
                                        <div className="font-weight-light">
                                            <p>Not a member?<a href="/Signup"><br/>Sign Up</a></p>
                                        </div>
                                    </MDBModalFooter>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <br/><br/><br/><br/><br/><br/>



            </div>

        )


    }

    updateUsername(username) {
        this.setState({
            username: username.target.value
        });
    }

    updatePassword(password) {
        this.setState({
            password: password.target.value
        });
    }
}