import { useState } from "react";
import { PostConsumer } from "../Context/PostContext";

function CardItem({ title, body, className, index,id }) {
  const {postList ,savePosts,deleteItem,searchedPosts} = PostConsumer();
  const mainPostList = searchedPosts.length>0?searchedPosts:postList
  const [active, setActive] = useState("");
  const handleActive = (indexItem) => {
    setActive((active) => !active);
    const item = mainPostList[indexItem]
    savePosts(item)

  };

  return (
    <div className={`card mt-3 ${className || ""}`} style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">{body}</p>
        <button className="btn" onClick={() => handleActive(index)}>
        
          <i className={`bi bi-heart ${active ? "colored" : ""}`}></i>
        </button>
      </div>
      <button className="btnclose btn" onClick={()=>deleteItem(id)}><i className="bi bi-x "></i></button>
    </div>
  );
}

export default CardItem;
