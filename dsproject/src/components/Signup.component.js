import React, {Component} from 'react';

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';





export default class Signup extends Component{

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePass = this.onChangePass.bind(this);
        this.onChangeCoPass = this.onChangeCoPass.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            uname: '',
            uemail: '',
            upasswrd: '',
            upass: '',
            uaddrs: ''
        }
    }

    onChangeName(e){
        this.setState({
            uname: e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            uemail: e.target.value
        });
    }

    onChangePass(e){
        this.setState({
            upasswrd: e.target.value
        });
    }

    onChangeCoPass(e){
        this.setState({
            upass: e.target.value
        });
    }

    onChangeAddress(e){
        this.setState({
            uaddrs: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const obj = {
            uname: this.state.uname,
            uemail: this.state.uemail,
            upasswrd: this.state.upasswrd,
            upass: this.state.upass,
            uaddrs: this.state.uaddrs

        };
        this.setState({
            uname:'',
            uemail:'',
            upasswrd:'',
            upass:'',
            uaddrs:''
        })
    }

    render() {
        return (

            <div>

            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form onSubmit={this.onSubmit} >
                            <p className="h4 text-center mb-4">User Registration</p>
                            <MDBBtn color="unique" type="submit" href="/" style={{  marginLeft: "30rem", marginTop:"-4rem"}}>
                                Login
                            </MDBBtn><br/>
                            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                Your name
                            </label>
                            <input
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                placeholder="ABCD EFGH"
                                value={this.state.uname}
                                onChange={this.onChangeName}
                            />
                            <br />
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="defaultFormRegisterEmailEx"
                                placeholder="abc@gmail.com"
                                className="form-control"
                                value={this.state.uemail}
                                onChange={this.onChangeEmail}
                            />
                            <br />
                            <label
                                htmlFor="defaultFormRegisterConfirmEx"
                                className="grey-text"
                            >
                                Contact No
                            </label>
                            <input
                                type="number"
                                id="defaultFormRegisterConfirmEx"
                                placeholder="000000"
                                className="form-control"
                                value={this.state.uaddrs}
                                onChange={this.onChangeAddress}
                            />
                            <br />
                            <label
                                htmlFor="defaultFormRegisterPasswordEx"
                                className="grey-text"
                            >
                                Your password
                            </label>
                            <input
                                type="password"
                                id="defaultFormRegisterPasswordEx"
                                className="form-control"
                                placeholder="****"
                                value={this.state.upasswrd}
                                onChange={this.onChangePass}
                            />
                            <label
                                htmlFor="defaultFormRegisterPasswordEx"
                                className="grey-text"
                            >
                                Confirm password
                            </label>
                            <input
                                type="password"
                                id="defaultFormRegisterPasswordEx"
                                placeholder="****"
                                className="form-control"
                                value={this.state.upass}
                                onChange={this.onChangeCoPass}
                            />
                            <div className="text-center mt-4">
                                <MDBBtn color="unique" type="submit" href="/">
                                    Register
                                </MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
                <br/><br/><br/><br/><br/>
            </div>

        );

    }
}