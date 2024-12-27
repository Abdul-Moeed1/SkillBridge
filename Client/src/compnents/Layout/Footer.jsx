// import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-light text-dark mt-5">
      <div className="container py-4">
        <div className="row text-center text-md-start">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold text-primary">SkillBridge</h5>
            <p className="text-muted">
              Bridging learners and experts, one skill at a time. Empowering growth through personalized learning experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold text-primary">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink
                  to="/"
                  className="text-muted text-decoration-none"
                  activeClassName="text-primary"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-muted text-decoration-none"
                  activeClassName="text-primary"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className="text-muted text-decoration-none"
                  activeClassName="text-primary"
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-muted text-decoration-none"
                  activeClassName="text-primary"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold text-primary">Contact Us</h5>
            <p className="text-muted mb-1">
              <i className="bi bi-envelope"></i> info@skillbridge.com
            </p>
            <p className="text-muted mb-1">
              <i className="bi bi-telephone"></i> +1 (234) 567-890
            </p>
            <p className="text-muted">
              <i className="bi bi-geo-alt"></i> 123 Skill St, Knowledge City
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3">
          <small className="text-muted">
            &copy; {new Date().getFullYear()} SkillBridge. All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
