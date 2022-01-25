import React from 'react'
import QHeader from '../Header/QHeader'
import Sidebar from '../Sidebar/Sidebar'
import Store from '../Action/Store'
import {ACTION_USER_LOGOUT,ACTION_USER_UPDATE_TOKEN } from "../Action/UserAction"
import {connect} from 'react-redux'
import Feed from '../Feed/Feed'
import SPost from '../SPost/SPost'

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
        questions:[],
        User : [],
        answers:[],
        quesId:[],
    }       
}
logout = (event)=>{
  this.setState({loginstatus:true}) 
  Store.dispatch({...ACTION_USER_LOGOUT})
} 
async answers () {
  let i=0;
  
 }
async componentDidMount ()
{
    //console.log(this.props.User)

    this.setState({Users:this.props.User})
    // console.log(this.props.User.email)
    // console.log(this.props.User.deptId)
    await fetch(`http://localhost:8082/web/getquestion/${this.props.User.deptId}`)
    .then(response=>response.json()).then(data=>{
      console.log(data)
      this.setState({questions:data.data},()=>{
        console.log("hello")
      })
    })
    console.log(this.state.questions)
    let i=0;
    let urllist=[]
  for(i;i< this.state.questions.length;i++){
      const response = await fetch(`http://localhost:8082/web/answer/${this.state.questions[i].quesId}`)
      const answer1 = await response.json()
      console.log(answer1)
      if(answer1.data !== null){
        urllist.push(answer1.data.answer)
        console.log(answer1.data.answer, "answer 1 is printing")
      }
      else{
        urllist.push("")
      }
      
      //urllist.push(answer1)
      //console.log("answers fetching",urllist)
      //console.log("answer is :",answer1.data.answer)

    }
    this.setState({answers:urllist}, ()=>{

    })
    //console.log(this.state.answers, "IN dashboard")

    //console.log("answer is",urllist[0].data.answer)
    // for(let i=0;i<this.state.questions.length;i++){
    //   await fetch(`http://localhost:8082/web/answer/${this.state.questions[i].quesId}`)
    //   .then(response=>response.json()).then(data=>{
    //     //console.log(data)
    //     this.setState({answers:data.data}, ()=>{
    //       console.log("print answers")
    //     })
    //   })
    // }
    // this.state.questions.map((data)=>{
    //   //console.log("chethana")
    //   console.log(data.quesId)
    //   fetch(`http://localhost:8082/web/answer/${data.quesId}`)
    //   .then(response=>response.json()).then(data=>{
    //     //console.log(data)
    //     this.setState({answers:data.data}, ()=>{
    //       console.log("print answers")
    //     })
    //   })
    // })
    console.log("answers", this.state.answers)
    // fetch(`http://localhost:8082/web/answer/${this.props.User.quesId}`)
    // .then(response=>response.json()).then(data=>{
    //   //console.log(data)
    //   this.setState({answers:data.data})
    // })
    fetch(`http://localhost:8082/web/getsubject/${this.props.User.deptId}`)
    .then(response=>response.json()).then(data=>{
      //console.log(data.data)
      this.setState({subjects:data.data})
    }
    )
   
    
 fetch(`http://localhost:8082/web/getuserbyemail/${this.props.User.token}`)

 .then(response=>response.json()).then(data=>{
   //console.log(data)
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

postquestion = (event)=>{
  var ob = {
      quesId:this.quesId.value,
      question:this.question.value,
      quesDate:this.quesDate.value,
      quesState:this.quesState.value,
      deptId: this.deptId.value,
  }
 fetch(`http://localhost:8082/web/postquestion`,{
      method : 'POST',
      headers:{
          "Content-Type" : "application/json"
      },
      body : JSON.stringify(ob)
  }).then(response=>response.json()).then(data=>{
      console.log(data)
      this.setState({questions:data.data})
  });;
  console.log(ob)
  event.preventDefault()
}

 
 render(){
 return (
 <div>
 <QHeader logout={this.logout} postquestion={this.postquestion}/>
 <h1>{this.props.User.email}</h1>
 <h2>{this.props.User.deptId}</h2>
 <div className="quora__contents">
        <div className="quora__content">
        <div>
          <Sidebar subjects={this.state.subjects}/>
          <SPost questions={this.state.questions} answers={this.state.answers}/>
          </div>  
          </div>
          
          </div>
 </div>
 )
}
}
 

export default connect(mapStateToProps,null)(SDashboard)