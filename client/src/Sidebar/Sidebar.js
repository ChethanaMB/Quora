import React from "react";
import "./Sidebar.css";
import SidebarOptions from "../SideBarOptions/SidebarOptions";
import QuoraBox from "../QuoraBox/QuoraBox";
function Sidebar(props) {
  return (
    <div className="sidebar">
      <SidebarOptions subjects={props.subjects}/>
      
    </div>
  );
}

export default Sidebar;