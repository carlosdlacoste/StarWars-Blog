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
              <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Favorites <span className="badge bg-secondary">4</span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><span className="dropdown-item">Action</span></li>
                  <li><span className="dropdown-item">Another action</span></li>
                  <li><span className="dropdown-item">Something else here</span></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    );
};
