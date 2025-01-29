import axios from "axios";
import { useParams } from "react-router-dom";

const user = axios.create({
    baseURL : "http://localhost:3000",
    withCredentials: true
});

export const createUser = (data) =>{
    return user.post("/user",data);
}

export const logIn = (data) =>{
    return user.post("/login",data);
}

export const getMentors = () =>{
    return user.get("/mentors");
}

export const getMentorData = async ({params}) =>{
    console.log(params);
    
    const id = params.id ;
    console.log("Id here is :" , id);
    try {
        const mentor = await user.get("/mentorData",{ params: { id },});
        const comments = await user.get("/getComments",{ params: { id },})
        
        return ({mentor , comments});
        
    } catch (error) {
        return (error);
    }
}

export const personalData = () =>{
    return user.get("/personalData");
}

export const updatePic = (data) =>{
    return user.patch("/updatePic",data);
}

export const updatePicTest = async(data) =>{
    try {
        const picData = await user.patch("/updatePic",data);
        const commentsPicData = await user.patch("/updateCommentsPic",data);
        
        return ({picData , commentsPicData});
    } catch (error) {
        return(error);
    }
}

export const postComment = (data) =>{
    return user.post("/postComment",data);
}

