import { useState } from "react";
import { PostConsumer } from "../Context/PostContext";

function CardItem({ title, body, className, index }) {
  const {postList ,savePosts} = PostConsumer();
  const [active, setActive] = useState("");
  const handleActive = (indexItem) => {
    setActive((active) => !active);
    const item = postList[indexItem]
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
    </div>
  );
}

export default CardItem;
