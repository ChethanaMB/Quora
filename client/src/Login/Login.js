import React from "react";
import "./Login.css";
import Store from '../Action/Store';
import { ACTION_USER_LOGIN } from '../Action/UserAction'
import { Navigate } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
//import email from "../GlobalData/email";

import {
  GoogleLoginButton,
  FacebookLoginButton
} from "react-social-login-buttons";
export default class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      regmsg: '',
      loginmsg: '',
      loginstatus: false,
      roleId: '',
    }
  }
  login = async (event) => {
    var ob = {
      email: this.email.value,
      password: this.password.value,
    }
    console.log(this.setState.loginstatus)
    await fetch(`http://localhost:8082/web/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ob)
    }).then(response => response.json()).then(data => {
      console.log(data)
      this.setState({ roleId: data.data[0] }, () => {
        console.log("hey")
      })

      //this.setState({loginmsg:data.data})
      if (data.status) {

        Store.dispatch({
          ...ACTION_USER_LOGIN, payload: {
            email: data.data[2],
            deptId:data.data[1],
            token: data.token

          }
        })
        this.setState({ loginstatus: true })
      } else
        this.setState({ loginmsg: data.msg })
    });;
    //console.log(this.state.loginstatus)
    console.log(ob)

    event.preventDefault()
  }

  render() {
   if(this.state.roleId === "STUDENT"){
      return(
    <Navigate to = {"/sdashboard"}/> )
    }
    else if(this.state.roleId === "TEACHER"){
      return(
      <Navigate to ={"/tdashboard"}/> )
      }
//   <Navigate to={{
//     pathname: "/tdashboard",
//     search: "?utm=your+face",
//     state: { referrer: this.state.roleId }
//   }}
//  />

// <Route

// path='/tdashboard'
// render={(props) => (
// <TDashboard {...props} />
// )}

// />

    return (
      <div> <Navbar></Navbar>
        <section className="h-100 bg-dark">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card card-registration my-4">
                  <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                        alt="Sample photo"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-xl-6">
                      <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase">User Login</h3>

                        <div className="form-outline mb-4">
                          <input type="text" ref={c => this.email = c} name="email" id="form3Example1m1" className="form-control form-control-lg" placeholder="Enter your Email" required />
                          <label className="form-label" htmlFor="form3Example9">Email</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" ref={c => this.password = c} name="password" id="form3Example1m1" className="form-control form-control-lg" placeholder="Enter your user name" required />
                          <label className="form-label" htmlFor="form3Example90">Password</label>
                        </div>

                        <b style={{ color: "red" }}>{this.state.regmsg}</b>


                        <div className="d-flex justify-content-end pt-3">
                          <input onClick={(event) => this.login(event)} type="submit" className="btn btn-warning btn-lg ms-2" />
                        </div>


                        <div>
                          <a href='/register'>Not a user?</a>
                        </div>

                        <div className="socialMediaButtons">
                          <div className="googleButton">
                            <GoogleLoginButton onClick={() => alert("Login")} />
                          </div>

                          <div className="instagramButton">
                            <FacebookLoginButton onClick={() => alert("Login")} />

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

}