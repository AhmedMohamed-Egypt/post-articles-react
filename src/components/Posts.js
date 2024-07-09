import { PostConsumer } from "../Context/PostContext"
import CardItem from "./CardItem"

function Posts() {
    const {postList} = PostConsumer()
   
   
    return (
       <div className="d-flex align-items-center flex-wrap">
         {postList.map((item,index)=><CardItem index={index} className={`${index!==(postList.length-1)?'mr-2':''}`} key={item.id} title={item.title} body={item.body}/>)}
       </div>
    )
}

export default Posts
