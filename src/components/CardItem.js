function CardItem({title,body,className}) {
    return (
        <div className={`card mt-3 ${className||""}`} style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          
          <p className="card-text">{body}</p>
       
        </div>
      </div>
    )
}

export default CardItem
