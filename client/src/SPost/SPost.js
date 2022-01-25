import { Add } from "@material-ui/icons";
import React from "react";
import "./Spost.css";

function SPost(props) {
  const answers = props.answers
  //console.log(answers[answers.length-1], "spost.js")
  return(
    <div>
    {props.questions.map((data, j) => {
      let i=0
//for( let i=0;i<props.answers.length;i++){
       
      return (
        
         <div key = {data.quesId} className="center">
         {/* <div className="center"> */}
            {/* <img
              src="https://graphicriver.img.customer.envatousercontent.com/files/241137299/KidReadingPreview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=b623860963df082ee8b5cb4ce6aa5912"
              alt=""
            /> */}
            <p >{data.question}</p>
            <p>{answers[j]}</p>
            {/* <textarea type="text" placeholder="Enter your question or link"/> */}
          </div>
      // </div>
      );
    //  break;
  //}
    })}
 
    </div>
    
  )
  // return (
  //   <div className="sidebarOptions">
  //     <div className="sidebarOption">
  //       <img
  //         src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg"
  //         alt=""
  //       />
  //       <p>Java</p>
  //     </div>

  //     <div className="sidebarOption">
  //       <img
  //         src="https://qphs.fs.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
  //         alt=""
  //       />

  //       <p>C Prgramming</p>
  //     </div>
  //     <div className="sidebarOption">
  //       <img
  //         src="https://qphs.fs.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg"
  //         alt=""
  //       />
  //       <p>Python</p>
  //     </div>

  //     <div className="sidebarOption">
  //       <img
  //         src="https://qphs.fs.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg"
  //         alt=""
  //       />
  //       <p>Machine Learning</p>
  //     </div>

  //     <div className="sidebarOption">
  //       <img
  //         src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
  //         alt=""
  //       />
  //       <p>AI</p>
  //     </div>

      
  //     <div className="sidebarOption">
  //       <Add />
  //       <p className="text">Discover Spaces</p>
  //     </div>
  //   </div>
  // );
}

export default SPost;

