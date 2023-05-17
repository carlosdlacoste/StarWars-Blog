import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext.js"

export const Navbar = () => {

  const {store, actions} = useContext(Context)
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
                  Favorites <span className="badge bg-danger">{store.carrito.length}</span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  {
                    store.carrito.length == 0 && <li><span className="dropdown-item">Empty...</span></li>
                  }
                  {
                    store.carrito.length != 0 && store.carrito.map((item, index) =>(
                      <li key={index}>
                        <span className="dropdown-item">{item.name}{" "}
                          <button type="button" className="btn btn-outline-dark border-0" onClick={() => {actions.removeFromCart(item)}}><i class="fa-solid fa-trash"></i></button>
                        </span>
                      </li>
                      
                    )) 
                  }
                  
                </ul>
              </div>
            </div>
          </div>
        </nav>
    );
};
