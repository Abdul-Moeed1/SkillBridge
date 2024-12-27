import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light"
      style={{ textAlign: "center", padding: "20px" }}
    >
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "bold",
          color: "#dc3545",
        }}
      >
        404
      </h1>
      <h2 style={{ color: "#333" }}>Page Not Found</h2>
      <p style={{ color: "#555", maxWidth: "400px", margin: "10px auto" }}>
        The page you're looking for doesn't exist or has been moved. Please
        check the URL or return to the homepage.
      </p>
      {/* <NavLink to="/" className="btn btn-primary mt-3">
        Go Back to Home
      </NavLink> */}
      <button onClick={()=>navigate(-1)} className="btn btn-primary  mt-3">
        Go Back to Previous Page
      </button>
    </div>
  );
};

export default NotFoundPage;
