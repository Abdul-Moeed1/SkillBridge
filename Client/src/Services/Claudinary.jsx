import axios from "axios";

const claudinary = axios.create({
    baseURL : "http://api.cloudinary.com",
});

export const changeProfilePic = (data) =>{
    
    return claudinary.post(`/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload` , data);
}