

 export const Comment = (props) => {
    const {text, commenterName ,posted , commenterImg} = props.data;
  return (
    <div className="d-flex flex-row card  p-2 shadow-sm my-0 col-lg-10 col-md-10 col-9 col-sm-10 ">
      {/* Profile Picture */}
      
      <img
        src={ commenterImg}
        alt={`'s profile`}
        className="rounded-circle me-3"
        style={{ width: "50px", height: "50px", objectFit: "cover" }}
      />
      

      {/* Comment Body */}
      <div className="flex-grow-1">
        {/* Comment Header */}
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="mb-0">{commenterName} </h6>
          <small className="text-muted">{posted.split('T')[0]}</small>
        </div>

        {/* Comment Text */}
        <p className="mb-0 mt-2 text-secondary">{text}</p>
      </div>
    </div>
  );
};


