import { useState } from "react";
import { PostConsumer } from "../Context/PostContext";
import Modal from "./Modal";

function TopBar() {
 const {savePostsList} = PostConsumer()
 const [show,setShow] = useState(false)
 const showSave = savePostsList.length >0
 const savedLists = savePostsList.map((item)=><div key={item.id}>
 <p>{item.title}</p>
 <p>{item.body}</p>
 </div>)
  return (
    <div className="d-flex align-items-center justify-content-between mt-3 topBar">
      <div className="topBar__logo">
       <img src="./logo.svg"/>
      </div>
      <div>
        <div className="input-group">
          <div className="form-outline" data-mdb-input-init>
            <input type="search" id="form1" className="form-control" placeholder="Search Articles" />
          
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
        {show&&<Modal>
         {savedLists}
        </Modal>}
      
      </div>
    </div>
  );
}

export default TopBar;