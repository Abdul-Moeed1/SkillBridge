import React from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';

const ServerErrorPage = () => {
    const navigate = useNavigate();
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">500</h1>
        <h2 className="mb-3">Internal Server Error</h2>
        <p className="lead text-muted mb-4">
          Oops! Something went wrong on our end. Please try again later or contact support.
        </p>
        {/* <NavLink to="/" className="btn btn-primary px-4 py-2 me-2">
          Go to Homepage
        </NavLink> */}
        <button onClick={()=>navigate(-1)} className="btn btn-primary  px-4 py-2 me-2">
        Go to Previous Page
      </button>
        <NavLink to="/contact" className="btn btn-secondary px-4 py-2">
          Contact Support
        </NavLink>
      </div>
    </div>
  );
};

export default ServerErrorPage;
