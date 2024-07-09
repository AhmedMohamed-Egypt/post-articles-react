import { useEffect, useReducer } from "react";
import { PostConsumer } from "../Context/PostContext";
import { useId } from "react";

import Error from "./Error";
const initialStateBody = {
  data:{
    title:"",
    body:""
  },
  error:false,
}
function reducer(snState,action){
    switch(action.type){
      case "changeTitle":{
        
        return {...snState,data:{...snState.data,title:action.payload}}
      }
      case "changeBody":{
        
        return {...snState,data:{...snState.data,body:action.payload}}
      }
      case "showError":{
        
        return {...snState,data:snState.data,error:true}
        
      }
      case "hideError":{
        return {...snState,data:snState.data,error:false}
      }
      case "noError":{
        return {...snState,error:false,data:initialStateBody.data}
      }
      default :{
        return "Action not known"
      }
    }
}

function AddPost() {
  const {addPost} = PostConsumer()
  const [{data,error},dispatch] = useReducer(reducer,initialStateBody)
  const id = crypto.randomUUID();
  const handleClick = ()=>{
    if(data.title.length ===0 || data.body.length === 0){
     dispatch({type:'showError'})
     setTimeout(()=>{
      dispatch({type:'hideError'})
     },2000)
    }else {
      dispatch({type:'noError'})
      const finalData= {...data,id:id}
      addPost(finalData)
     
    }
  }

  return (
    <div>
     <div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">Title Post</label>
  <input type="text" value={data.title} onChange={(e)=>{dispatch({type:'changeTitle',payload:e.target.value})}} className="form-control" id="formGroupExampleInput" placeholder="Write Title Post"/>
</div>
<div className="form-floating">
  <textarea value={data.body} onChange={(e)=>{dispatch({type:'changeBody',payload:e.target.value})}} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label htmlFor="floatingTextarea">Subject</label>
</div>
{error&&<Error message="Please Fill Feilds"/>}
<div className="mt-2">
<button type="button" className="btn btn-primary" onClick={()=>handleClick()}>Add Post</button>
</div>
    </div>
  );
}

export default AddPost;
