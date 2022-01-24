import React from "react";
import "./Register.css";
import Navbar from "../Navbar/Navbar";

export default class Register extends React.Component{

    constructor(){
        super()
         this.state = {
            regmsg : '',
            loginmsg : '',
            subjects: [],
        }
    }

    verfication=()=>{
      var ob = {
        userId :this.userId.value,
        roleId : this.roleId.value,
        name:this.name.value,
        email : this.email.value,
        password: this.password.value,
        deptId: this.deptId.value,
      }


  }
    register = (event)=>{
        var ob = {
            userId :this.userId.value,
            roleId : this.roleId.value,
            name:this.name.value,
            email : this.email.value,
            password: this.password.value,
            deptId: this.deptId.value,
        }
        fetch(`http://localhost:8082/web/register`,{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(ob)
        }).then(response=>response.json()).then(data=>{
            console.log(data)
            this.setState({subjects:data.data})
        });;
        console.log(ob)
        event.preventDefault()
    }

    render(){
        return(
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
                <h3 className="mb-5 text-uppercase">User registration form</h3>

                <div className="form-outline mb-4">
                <input type="text" ref={c=>this.userId=c} name="user  Id" id="userId" className="form-control form-control-lg" placeholder="Enter your USN/Teacher ID" required/>
                  <label className="form-label" htmlFor="form3Example8">User ID</label>
                </div>

                <div className="form-outline mb-4">
                <input type="text" ref={c=>this.name=c} name="user name" id="userName" className="form-control form-control-lg" placeholder="Enter your user name" required/>
                  <label className="form-label" htmlFor="form3Example8">User Name</label>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    
                    <select className="select" ref={c=>this.roleId=c}  id="form3Example1m1">
                      <option value="1">Role</option>
                      <option value="STUDENT" ref={c=>this.roleId=c}>Student</option>
                      <option value="TEACHER" ref={c=>this.roleId=c}>Teacher</option>
                    </select>

                  </div>
                  <div className="col-md-6 mb-4">

                    <select className="select" ref={c=>this.deptId=c}  id="form3Example1m1">
                      <option value="1">Department</option>
                      <option value="CSE" ref={c=>this.deptId=c}>CSE</option>
                      <option value="ECE" ref={c=>this.deptId=c}>ECE</option>
                    </select>

                  </div>
                </div>

                <div className="form-outline mb-4">
                <input type="text" ref={c=>this.email=c} name="email" id="form3Example1m1" className="form-control form-control-lg" placeholder="Enter your Email" required/>
                  <label className="form-label" htmlFor="form3Example9">Email</label>
                </div>

                <div className="form-outline mb-4">
                <input type="password" ref={c=>this.password=c} name="password" id="form3Example1m1" className="form-control form-control-lg" placeholder="Enter your user name" required/>
                  <label className="form-label" htmlFor="form3Example90">Password</label>
                </div>

                <b style={{color:"red"}}>{this.state.regmsg}</b>

      
                <div className="d-flex justify-content-end pt-3">
                  <input onClick={(event)=> this.register(event)} type="submit" className="btn btn-warning btn-lg ms-2"/>
                </div>
                

                <div>
                <a href='/login'>Already a user?</a>
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
