function AddPost() {
  return (
    <div>
     <div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">Title Post</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Write Title Post"/>
</div>
<div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label htmlFor="floatingTextarea">Subject</label>
</div>
<div className="mt-2">
<button type="button" className="btn btn-primary">Add Post</button>
</div>
    </div>
  );
}

export default AddPost;
