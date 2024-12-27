import { NavLink } from "react-router-dom"

export const MentorCard = (props) => {
    const {name,joined,skills} = props.data;
    console.log(props);
    
    return (
      <div className="col-lg-4 col-md-6 col-9 col-sm-6 mb-4">
        <div className="card h-100 d-flex flex-column" >
          <img src="https://via.placeholder.com/150" alt="John Doe" className="card-img-top img-fluid rounded" />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title d-flex justify-content-center h3">{name}</h5>
            <div className="  " style={{ minHeight: '120px',maxHeight: '180px' }}> <strong>Skills: </strong> 
            <div>
            {skills.map((skill,index)=>{
                 return (
                   <span key={index} className=" skill-badge badge-text px-3 mx-2 my-1">{skill}</span>
               )
            })}</div> </div>
            <p className="card-text"><strong>Bio:</strong> Learn professional photography techniques from John.</p>
            <p className="card-text"><strong>Joined:</strong>  {joined.split('T')[0]}</p>
            <NavLink to="/mentor/1" className="btn btn-primary">
              Learn More
            </NavLink>
          </div>
        </div>
      </div>
    )
}