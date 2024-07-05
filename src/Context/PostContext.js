import { act, createContext, useContext, useReducer, useState } from "react";
//Create Context
const PostContext = createContext();
//Using Reducer

const initialState = {
  posts: [{title:"title1",body:"lorem 15",id:1},{title:"title2",body:"lorem 16",id:2}],
};

function reducer(snstate, action) {
  switch (action.paylod) {
    case "": {
      return { ...snstate };
    }

    default: {
      return "Action not known";
    }
  }
}
//Create Provider

function PostProvider({ children }) {
  const [{posts}, dispatch ] = useReducer(reducer, initialState);

  return <PostContext.Provider value={posts}>{children}</PostContext.Provider>;
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
