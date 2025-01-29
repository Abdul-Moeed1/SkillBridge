import React, { useState } from "react";
import { postComment } from "../../Services/Users";

export const PostComment = (props) => {
  const [comment, setComment] = useState("");
  const [authError, setAuthError] = useState(false);
  const {profileId} = props;

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Comment submitted:", comment);
    try {
      const res = await postComment({profileId,comment});
      console.log("This is res:" , res);
      
    } catch (error) {
      console.log("This is error :" , error);
      console.log("This is error status:" , error.status);
      if(error.status == 401){
        setAuthError(true);
      }
      
    }
    
    // Add logic to handle the comment submission (e.g., API call).
    setComment(""); // Clear the text area after submission.
  };

  return (
    <div className="card  p-4 shadow-sm my-4 col-lg-10 col-md-10 col-9 col-sm-10 mb-4">
      <h5 className="card-title">Post a Comment</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <textarea
            className="form-control"
            placeholder="Write your comment here..."
            rows="4"
            value={comment}
            onChange={handleInputChange}
            required
            style={{ resize: "none" }}
          ></textarea>
          {authError && (<small className="text-danger mt-1 d-block">
                                Please Login first to make comment.
                            </small>)}
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            Post Comment
          </button>
        </div>
      </form>
    </div>
   
  );
};


