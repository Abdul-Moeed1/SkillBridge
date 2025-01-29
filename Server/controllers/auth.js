const User = require("../models/user");
const Comment = require("../models/comment");

 const mentorData = async (req, res) => {
    try {
        console.log("The req id:" , req.query.id);
        
        const data = await User.findById(req.query.id);
        console.log(data);
        res.send(data)
    } catch (error) {
        res.status(400).send("Data not found")
    }

    
}

const isLoggedIn = async(req , res) =>{
        res.send("I am Working");

}


const updatePic = async(req,res) =>{
        try {
                const token = req.cookies.jwt;
                // console.log(token);
                if(!token){
                    console.log("Res returned due to no token found");
                    return (res.status(400).send("Token not found"))
                }
                const url = req.body.url;
                console.log("The url is:" , url);
                
                const tokenArray = token.split('.');
                // console.log(tokenArray);
                const tokenPayload = JSON.parse(atob(tokenArray[1]));
                // console.log(tokenPayload);
                const person = await User.updateOne({email: tokenPayload.email},{ $set: { image: url } });
                console.log(person);
                
                res.send("Image cHanged sussesfully");
            } catch (error) {
                console.log(error);
                res.status(400).send("Token not found");
            }
}
const updateCommentsPic = async(req,res) =>{
    const url = req.body.url;
        try {
                
                const result = await Comment.updateMany({commenterId: req.person._id.toString()},{ $set: { commenterImg: url } });
                console.log(result);
                
                res.send("Image cHanged sussesfully for comments");
            } catch (error) {
                console.log(error);
                res.status(400).send("Can not change images");
            }
}

const postComment = async(req,res) =>{
    try {
        console.log("comment:" , req.body.comment);
        console.log("This is id of profile:" ,  req.body.profileId);
        
         const text = req.body.comment;
         const commenterId = req.person._id.toString();
         const commenterName = req.person.name;
        const profileId = req.body.profileId;
        const commenterImg = req.person.image;
        
        
        const comment = new Comment({ text, commenterId , commenterName ,  profileId, commenterImg });
        const commentData = await comment.save();
        console.log(commentData);
        
        res.send(commentData);
        
    } catch (error) {
        res.send(error);
    }
}

const getComments = async(req,res) =>{
    try {
        console.log("The req id:" , req.query.id);
        const profileId = req.query.id;
        
        const comments = await Comment.find({profileId});
        console.log(comments);
        res.send(comments)
    } catch (error) {
        res.status(400).send("Data not found")
    }
}

module.exports = {isLoggedIn , updatePic  , mentorData, postComment , getComments , updateCommentsPic}