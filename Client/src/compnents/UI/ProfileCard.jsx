import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { changeProfilePic } from "../../Services/Claudinary";
import { updatePic, updatePicTest } from "../../Services/Users";

export const ProfileCard = (props) => {
    const [editPic, setEditPic] = useState(false);
    const [imageSetFailed, setimageSetFailed] = useState(false);
    const [imageFile, setImageFile] = useState("");
    const { name, joined, skills , image } = props.data;
    const navigate = useNavigate();
    console.log("Image data at rendering timr: " , image);
    
    console.log(props);

    
    const setPic = async(url) =>{
            try {
                console.log("Url here inside setPic Fun is: ", url);
                
                const ans = await updatePicTest({url});
                console.log("This is res of setPic" , ans);
                if(ans.picData.status == 200)
                {
                    setimageSetFailed(false);
                    navigate(0);
                }
                
            } catch (error) {
                console.log("Error due to 3000" , error);
                setimageSetFailed(true);
            }
        } 
    

    // useEffect(()=>{
    //     setPic();
    // },[url])

    
    const handleImageSubmit = async () =>{

            const data  =  new FormData();
            data.append("file" , imageFile);
            data.append("upload_preset" , import.meta.env.VITE_CLOUDINARY_PRESET);
            data.append("cloud_name" , import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
            try {
                const res = await changeProfilePic(data); 
                console.log("This url is geted from claudinary:" , res.data.url);
    
                await setPic(res.data.url);
            } catch (error) {
                console.log(error);
                setimageSetFailed(true);
            }
        }
    

    return (
        <div className="col-lg-4 col-md-6 col-9 col-sm-6 mb-4">

            <div className="card h-100 d-flex flex-column" >
                <div className="position-relative">
                    <img
                        src={image ? `${image}` : "https://via.placeholder.com/150"}
                        alt={name}
                        className="card-img-top img-fluid rounded"
                    />
                    {editPic && <div className="position-absolute p-3 " style={{
                        top: "60px",
                        right: "10px",
                        backgroundColor: "rgba(145, 150, 160, 0.6)",
                        color: "#fff",
                        fontSize: "14px",
                        border: "none",
                    }} >
                        <input type="file" name="" id=""
                            onChange={(e) => setImageFile(e.target.files[0])}
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.6)",
                            }}
                        />
                        {/* <button className="btn btn-danger btn-small " onClick={() => setEditPic(!editPic)} >X</button> */}
                        <button className="btn btn-secondary mx-2"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", }}
                            onClick={handleImageSubmit}
                        >Set Image </button>
                        {imageSetFailed && (<small className="text-danger mt-1 d-block">
                                Image can not be changed.
                            </small>)}
                    </div>}
                    <button
                        className="btn btn-secondary position-absolute"
                        style={{
                            top: "10px",
                            right: "10px",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                            color: "#fff",
                            fontSize: "14px",
                            border: "none",
                        }}
                        onClick={() => setEditPic(!editPic)}
                    >
                        Edit Picture
                    </button>
                </div>
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
                    <NavLink to="/mentor/1" className="btn btn-primary">
                        Learn More
                    </NavLink>
                </div>
            </div>
        </div >
    )
}