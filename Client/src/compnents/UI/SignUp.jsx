import React, { useEffect, useState } from "react";
import { createUser } from "../../Services/Users";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "learner", // Default role is learner
    skills: [], // Only applicable for mentors
  });

  const [pasErr, setPasErr] = useState(false);
  const [emailDup, setEmailDup] = useState(false);

  const [isMentor, setIsMentor] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Toggle mentor-specific fields
    if (name === "role" && value === "mentor") {
      setIsMentor(true);
    } else if (name === "role" && value === "learner") {
      setIsMentor(false);
    }
  };

  const handleSkillsChange = (e) => {
    setFormData({
      ...formData,
      skills: e.target.value.split(",").map((skill) => skill.trim()), // Split skills by commas
    });
  };

  const sendData = async () => {
    try {
      const data = await createUser(formData);
      console.log("From server", data);
      console.log("status server", data.status);
      
    } catch (error) {
      console.log("This is error", error);
      //Checks that the error is due to using already existing email account
      if (error.response.data.email=="duplicate"){
        console.log("Email is duplicated");
        setEmailDup(true);
      } 

    }


  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    if (formData.password != formData.confirmPassword) {
      setPasErr(true);
    } else {
      setPasErr(false);
      sendData();
    }

    // Add the API call to submit the form data to the backend
    // For example: axios.post('/api/users/signup', formData)
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${emailDup?"is-invalid" :""}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          {emailDup && (<small className="text-danger mt-1 d-block">
            This Email is already registered.Use another Email.
          </small>)}
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Confirm Password</label>
            <input
              type="password"
              className={`form-control ${pasErr?"is-invalid" :""}`}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          {pasErr && (<small className="text-danger mt-1 d-block">
            Passwords do not match. Please try again.
          </small>)}
          </div>


          {/* Role Dropdown */}
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Role</label>
            <select
              className="form-select"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="learner">Learner</option>
              <option value="mentor">Mentor</option>
            </select>
          </div>

          {/* Skills Field (Only for Mentors) */}
          {isMentor && (
            <div className="mb-3">
              <label htmlFor="skills" className="form-label">Skills (comma-separated)</label>
              <input
                type="text"
                className="form-control"
                id="skills"
                name="skills"
                placeholder="e.g., Programming, Photography"
                onChange={handleSkillsChange}
              />
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
