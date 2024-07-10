import { createContext, useContext, useReducer, useState } from "react";
//Create Context
const PostContext = createContext();
//Using Reducer

const initialState = {
  postList: [
    { title: "title1", body: "lorem 15", id: 1 },
    { title: "title2", body: "lorem 16", id: 2 },
  ],
  errorPost: false,
  savePostsList: [],
  searchedPosts:[],

};

function reducer(snstate, action) {
  switch (action.type) {
    case "onAddPost": {
      const addedPost = action.payload;
      return { ...snstate, postList: [...snstate.postList, addedPost] };
    }
    case "savePost": {
      const addedItem = [...snstate.savePostsList, action.payload];
      const removeItem = snstate.savePostsList.filter(
        (item) => item.title !== action.payload.title
      );
      const addedList = !snstate.savePostsList
        .map((item) => item.title)
        .includes(action.payload.title)
        ? addedItem
        : removeItem;
      return { ...snstate, savePostsList: addedList };
    }

    case "delete": {
      const itemIndex = action.payload;

      const filteredPostList = snstate.postList.filter(
        (item, index) => index !== itemIndex && item
      );
      const filteredSavePostList = snstate.savePostsList.filter(
        (item) => item.title !== snstate.postList[itemIndex].title
      ).sort()
      return {
        ...snstate,
        postList: filteredPostList,
        savePostsList: filteredSavePostList,
      };
    }
    case "search":{
      const searchItem = action.payload
      const searchedPostList = 
       snstate.postList.filter((item)=>{
        return (
          item.title.trim().split(" ").join("").toLowerCase().indexOf(searchItem.split(" ").join("").toLowerCase())>-1 ||
          item.body.trim().split(" ").join("").toLowerCase().indexOf(searchItem.split(" ").join("").toLowerCase())>-1
        )
      })

      if(searchedPostList.length !== snstate.postList.length){
        return {...snstate,searchedPosts:searchedPostList}
      }
      return {...snstate,searchedPosts:[]}
      
      
    }

    default: {
      throw new Error("Action not known")
    }
  }
}
//Create Provider

function PostProvider({ children }) {
  const [{ postList, errorPost, savePostsList,searchedPosts }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function addPost(postObject) {
    dispatch({ type: "onAddPost", payload: postObject });
  }

  function savePosts(saveObject) {
    dispatch({ type: "savePost", payload: saveObject });
  }
  function deleteItem(indexItem) {
    dispatch({ type: "delete", payload: indexItem });
  }
  function searchItem(searchTxt){
    dispatch({type:"search",payload:searchTxt})
  }
  return (
    <PostContext.Provider
      value={{
        postList,
        addPost,
        errorPost,
        savePosts,
        savePostsList,
        deleteItem,
        searchItem,
        searchedPosts
      }}
    >
      {children}
    </PostContext.Provider>
  );
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
