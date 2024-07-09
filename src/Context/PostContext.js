import {  createContext, useContext, useReducer, useState } from "react";
//Create Context
const PostContext = createContext();
//Using Reducer

const initialState = {
  postList: [{title:"title1",body:"lorem 15",id:1},{title:"title2",body:"lorem 16",id:2}],
  errorPost:false,
  savePostsList:[]
};

function reducer(snstate, action) {
  switch (action.type) {
    case "onAddPost": {
      
      const addedPost = action.payload
      return { ...snstate,postList:[...snstate.postList,addedPost]};
    }
    case "savePost":{
      const addedItem = [...snstate.savePostsList,action.payload]
      const removeItem  = snstate.savePostsList.filter((item)=>item.title!==action.payload.title)
      const addedList = !snstate.savePostsList.map((item)=>item.title).includes(action.payload.title)?addedItem:removeItem
      return {...snstate,savePostsList:addedList}
    }


    default: {
      return "Action not known";
    }
  }
}
//Create Provider

function PostProvider({ children }) {
  const [{postList,errorPost,savePostsList}, dispatch ] = useReducer(reducer, initialState);

  function addPost(postObject){
    
    dispatch({type:"onAddPost",payload:postObject})
  }

  function savePosts(saveObject){
    dispatch({type:'savePost',payload:saveObject})
  }
  return <PostContext.Provider value={{postList,addPost,errorPost,savePosts,savePostsList}}>{children}</PostContext.Provider>;
}

//Consume

function PostConsumer() {
  const context = useContext(PostContext);
  if (context == undefined) {
    throw new Error("Action out side");
  }
  return context;
}

export { PostProvider, PostConsumer };
