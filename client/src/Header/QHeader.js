import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
 AssignmentTurnedInOutlined,
 // Close,
 NotificationsOutlined,
 PeopleAltOutlined,
 Search,
 ExpandMore,
 ExitToAppOutlined,
} from "@material-ui/icons";
//import CloseIcon from "@material-ui/icons/Close";
import { Avatar, Button, Input } from "@material-ui/core";
import "./QHeader.css";
function QHeader(props){
 
 return (
 <div className="qHeader">
 <div className="qHeader-content">
 <div className="qHeader__logo" >
 <img
 src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
 alt="logo"
 />
 </div>
 <div className="qHeader__icons">
 <div className="qHeader__icon">
 <HomeIcon />
 </div>
 <div className="qHeader__icon">
 <FeaturedPlayListOutlinedIcon/>
 </div>
 <div className="qHeader__icon">
 <AssignmentTurnedInOutlined />
 </div>
 <div className="qHeader__icon">
 <PeopleAltOutlined />
 
 </div>
 <div className="qHeader__input">
 <Search />
 <input type="text" placeholder="Search questions" />
 </div>
 <div className="qHeader__Rem">
 
 <Avatar/>
 </div>
 <div className="qHeader__icon">
 <ExitToAppOutlined />
 </div>
 <div className="qHeader__icon">
 <Button onClick={(event)=> this.postquestion(event)}>Add Question </Button>
 </div>
 
 </div>
 </div>
 </div>
 );
}
 
export default QHeader;