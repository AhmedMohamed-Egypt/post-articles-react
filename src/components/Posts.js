import { PostConsumer } from "../Context/PostContext"
import CardItem from "./CardItem"

function Posts() {
    const {postList,searchedPosts} = PostConsumer()
   
    const mainPostList = searchedPosts.length>0?searchedPosts:postList
   
    return (
       <div className="d-flex align-items-center flex-wrap">
         {mainPostList.map((item,index)=><CardItem index={index} className={`${index!==(postList.length-1)?'mr-2':''}`} key={item.id} title={item.title} body={item.body}/>)}
       </div>
    )
}

export default Posts
