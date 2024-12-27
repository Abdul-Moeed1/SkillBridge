import axios from "axios";

const user = axios.create({
    baseURL : "http://localhost:3000"
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