import React, { useEffect, useState } from "react";
//import QuoraBox from "../QuoraBox/QuoraBox";
import "./Feed.css";
//import Post from "../Post/Post";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState();
  const [questions,setQuestions] = useState([]);
  var quesId=0
  useEffect(() => {
    axios
      .get("http://localhost:8082/web/answer/61eae8cb7ea048306d0ff52f")
      .then((res) => {
        //console.log(res.data);
        const { data } = res.data;
       
        console.log(data);
        
          setPosts(data);
        
       // setPosts([]);
      })
      .catch((e) => {
        console.log(e);
      });
      axios
      .get("http://localhost:8082/web/getquestion/CSE")
      .then((res) => {
        //console.log(res.data);
        const { data } = res.data;
        console.log(data)
        setQuestions(data);
      
      
      })
      .catch((e) => {
        console.log(e);
      });

  }, []);
  return (
    <div className="feed">
            
           {questions && questions.map((post) => (
              <h3  key={post.question} >{post.question}
                 <h4>{ post.quesId==posts.quesId && posts.answer}</h4> 

              </h3>
             
           ))}
             
    </div>
  );
}

export default Feed;