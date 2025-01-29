import { useLoaderData } from "react-router-dom";
import { PostComment } from "./PostComment";
import { Comment } from "./Comment";

export const MentorProfile = () => {
    const mentorData = useLoaderData();
    console.log(mentorData);
    const comments = mentorData.comments;

    const { _id, name, joined, skills, image } = mentorData.mentor.data;
    return (

        <>

            <div className="row d-flex justify-content-center align-items-center my-5">
                <div className="col-lg-4 col-md-6 col-9 col-sm-6 mb-4">
                    <div className="card h-100 d-flex flex-column" >
                        <img src={image ? `${image}` : "https://via.placeholder.com/150"} alt="John Doe" className="card-img-top img-fluid rounded" />

                        <div className="card-body d-flex flex-column justify-content-between">
                            <h5 className="card-title d-flex justify-content-center h3">{name}</h5>
                            <div className="  " style={{ minHeight: '120px', maxHeight: '180px' }}> <strong>Skills: </strong>
                                <div>
                                    {skills.map((skill, index) => {
                                        return (
                                            <span key={index} className=" skill-badge badge-text px-3 mx-2 my-1">{skill}</span>
                                        )
                                    })}
                                </div> </div>
                            <p className="card-text"><strong>Bio:</strong> Learn professional photography techniques from John.</p>
                            <p className="card-text"><strong>Joined:</strong>  {joined.split('T')[0]}</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center ">

                <PostComment profileId={_id}/>
            </div>
            <div className="d-flex align-items-center flex-column my-3">
                {
                    comments.data.map((curComment,index)=>{
                        return (<Comment data={curComment} key={index}/>)
                    })
                }
                {/* <Comment/>
                <Comment/> */}
            </div>
        </>
    );
}