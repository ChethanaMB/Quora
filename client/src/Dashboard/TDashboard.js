import React from 'react'
import QHeader from '../Header/QHeader'
import Sidebar from '../Sidebar/Sidebar'
import Store from '../Action/Store'
import {ACTION_USER_LOGOUT,ACTION_USER_UPDATE_TOKEN } from "../Action/UserAction"
import {connect} from 'react-redux'
import Post from '../Post/Post'
//import Post from '../Post/Post'
import Feed from '../Feed/Feed'
import QuoraBox from '../QuoraBox/QuoraBox'

var mapStateToProps = state => {
  return {
     User: state.Users,
  }
}
 
class SDashboard extends React.Component{

  constructor(){
    super()
    this.state = {
        updateProfilemsg : '',
        loginstatus:false,
        email:'',
        subjects: [],
        User : [],
    }       
}
logout = (event)=>{
  this.setState({loginstatus:true}) 
  Store.dispatch({...ACTION_USER_LOGOUT})
} 
componentDidMount()
{
    console.log(this.props.User)
    this.setState({Users:this.props.User})
    console.log(this.props.User.email)
    console.log(this.props.User.deptId)
    fetch(`http://localhost:8082/web/getsubject/${this.props.User.deptId}`)
    .then(response=>response.json()).then(data=>{
      console.log(data.data)
      this.setState({subjects:data.data})
    }
    )
 fetch(`http://localhost:8082/web/getuserbyemail/${this.props.User.token}`)

 .then(response=>response.json()).then(data=>{
   console.log(data)
        if(data.status)
        {
            Store.dispatch({...ACTION_USER_UPDATE_TOKEN,payload:{
                token : data.token
            }})
            this.setState({Users:data.data})
            this.setState({email:data.data[2]})
            this.setState({deptId:data.data[1]})
        }else{
            if(data.code==401)
                alert("Invalid User !")
            if(data.code==400)
                alert("Session Lost !")
                this.setState({loginstatus:true})  
            Store.dispatch({...ACTION_USER_LOGOUT})                      
        }
    }); 
    console.log(this.props.User)
}
 
 render(){
 return (
 <div>
 <QHeader/>
 <h1>{this.props.User.email}</h1>
 <h2>{this.props.User.deptId}</h2>
 <div className="quora__contents">
        <div className="quora__content">
        
          <Sidebar subjects={this.state.subjects}/>
          
          </div>
          </div>
 </div>
 )
}
}
 

export default connect(mapStateToProps,null)(SDashboard)