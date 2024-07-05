import { PostConsumer } from "../Context/PostContext"
import CardItem from "./CardItem"

function Posts() {
    const posts = PostConsumer()
   
    return (
       <div className="d-flex align-items-center">
         {posts.map((item,index)=><CardItem className={`${index!==(posts.length-1)?'mr-2':''}`} key={item.id} title={item.title} body={item.body}/>)}
       </div>
    )
}

export default Posts
