import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navbar-brand mb-0 h1 d-flex flex-row align-items-center">
            <i className="fas fa-jedi me-2 fs-2"></i>
            <h4 className="mb-0">Star Wars</h4>
          </div>
        </Link>
        <div className="ml-auto">
          <button type="button" className="btn btn-primary">
            Favorites <span className="badge bg-secondary">4</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
