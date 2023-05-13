import React, { useState } from "react";
import PropTypes from "prop-types";

export const CharacterCard = (props) => {
  return (
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column align-items-start">
          <h5 className="card-title">Card title</h5>
          <p className="card-text text-start">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex flex-row justify-content-between" style={{ width: "100%" }}>
            <button className="btn btn-primary">Learn More!</button>
            <button type="button" className="btn btn-outline-warning">
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  hairColor: PropTypes.string,
  eyeColor: PropTypes.string,
};
