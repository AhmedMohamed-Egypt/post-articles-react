
function TopBar() {
 
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
      </div>
    </div>
  );
}

export default TopBar;