import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="hero-section d-flex align-items-center bg-light">
      <div className="container text-center text-md-start">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6">
            <h1 className="display-4 fw-bold text-primary">
              Unlock Skills, Empower Growth
            </h1>
            <p className="text-muted mt-3">
              Connect with mentors, learn new skills, or teach what you love.
              SkillBridge bridges the gap between learners and experts for
              personal and professional growth.
            </p>
            <div className="mt-4">
              <NavLink
                to="/mentors"
                className="btn btn-primary btn-lg me-2"
              >
                Start Learning
              </NavLink>
              <NavLink
                to="/signup"
                className="btn btn-outline-primary btn-lg"
              >
                Become a Mentor
              </NavLink>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-6 mt-4 mt-md-0 text-center">
            <img
              src="Learning.jpg"
              alt="SkillBridge Hero"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
