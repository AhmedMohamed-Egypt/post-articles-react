import { useState } from "react";
import { PostConsumer } from "../Context/PostContext";
import Modal from "./Modal";

function TopBar() {
 const {savePostsList,searchItem} = PostConsumer()
 const [show,setShow] = useState(false)
 const [searchTxt,setSearchTxt] = useState("")
 const showSave = savePostsList.length >0
 const savedLists = savePostsList.sort().map((item)=><div className="item-modal" key={item.id}>
 <p>{item.title}</p>
 <p>{item.body}</p>
 </div>
 )
 function handleChange(searchParam){
    setSearchTxt(searchParam)
    searchItem(searchParam)
 }
  return (
    <div className="d-flex align-items-center justify-content-between mt-3 topBar">
      <div className="topBar__logo">
       <img src="./logo.svg"/>
      </div>
      <div>
        <div className="input-group">
          <div className="form-outline" data-mdb-input-init>
            <input type="search" id="form1" onChange={(e)=>handleChange(e.target.value)} value={searchTxt} className="form-control" placeholder="Search Articles" />
          
          </div>
          <button
            type="button"
            className="btn btn-primary"
            data-mdb-ripple-init
          >
            <i className="bi bi-search"></i>
          </button>
         
        </div>
        {showSave&&  <div className="mt-2 d-flex justify-content-end">
        <button onClick={()=>setShow(true)} className="btn btn-info">Saved Posts</button>
        </div>}
        {show&&<Modal  onClick={(e)=>{setShow(false)}}>
         <div className="modal_content" onClick={(e)=>{e.stopPropagation()}}>
          <button className="btnclose btn" onClick={()=>setShow(false)}><i className="bi bi-x "></i></button>
         {savedLists}
         </div>
        </Modal>}
      
      </div>
    </div>
  );
}

export default TopBar;