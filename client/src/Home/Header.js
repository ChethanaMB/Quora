import React from "react";

export default class Header extends React.Component{

    constructor(){
        super()
         this.state = {
            regmsg : '',
            loginmsg : ''
        }
    }
   

    render(){
        return(
            
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" >
            <div className="container">
        
              <a className="navbar-brand js-scroll-trigger" href="#" style={{marginTop: "10px",marginLeft:"-65px",fontFamily: 'IBM Plex Sans'}} ><h4><i class="fa fa-user-plus" aria-hidden="true"></i> MEDICO</h4></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item" style={{marginRight: "40px"}}>
                    <a className="nav-link js-scroll-trigger" href="index.php" style={{color: "white",fontFamily: 'IBM Plex Sans'}}><h6>HOME</h6></a>
                  </li>
          
                  <li className="nav-item" style={{marginRight:"40px"}}>
                    <a className="nav-link js-scroll-trigger" href="services.html" style={{color: "white",fontFamily: 'IBM Plex Sans'}}><h6>ABOUT US</h6></a>
                  </li>
        
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="contact.html" style={{color: "white",fontFamily: 'IBM Plex Sans'}}><h6>CONTACT</h6></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>            

        )
    }

}