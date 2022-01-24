import React from "react";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Home from "./Home/Home";
import TDashboard from "./Dashboard/TDashboard";
import SDashboard from "./Dashboard/SDashboard";
import Post from "./Post/Post";
import Feed from "./Feed/Feed";
import "./App.css";

import "./Register/Register.css";
import {
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';


 export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      authenticated:false,
      loading:true
    };
  }

  render(){
    return(
    <div>  
      
             <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/register" element={<Register/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/sdashboard" element={<SDashboard/>}/>
             <Route path="/post" Component={<Post/>}/>
             <Route path="/tdashboard" element={<TDashboard/>}/>
             <Route path="/feed" element={<Feed/>}/>
             
            
             </Routes>

         
        </div>
      
    )
  }
}