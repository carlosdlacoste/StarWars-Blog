import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CharacterDetail } from "../views/characterDetail";

export const CharacterCard = (props) => {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    async function loadCharacter(){
			try{
				const resp = await fetch(`${props.url}`)
				const data = await resp.json()
        // console.log(data.result.properties)
				setCharacter(data.result.properties)
			}catch(err){
				console.log(err)
			}
		}
		loadCharacter();
  }, [])

  return (
      <>
      
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/09/hipertextual-tengo-mal-presentimiento-sobre-esto-todas-veces-que-han-dicho-star-wars-2020046719.jpg?resize=1500%2C1000&quality=50&strip=all&ssl=1" className="card-img-top" alt="..." style={{ maxHeight: '200px', objectFit: 'cover' }} />
          <div className="card-body d-flex flex-column align-items-start">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text text-start">
              Gender:{" "}{character.gender}
            </p>
            <p className="card-text text-start">
              Hair-Color:{" "}{character.hair_color}
            </p>
            <p className="card-text text-start">
              Eye-Color:{" "}{character.eye_color}
            </p>
            <div className="d-flex flex-row justify-content-between" style={{ width: "100%" }}>
              <button className="btn btn-primary">Learn More!</button>
              <button type="button" className="btn btn-outline-warning">
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </>
  );
};

CharacterCard.propTypes = {
  item: PropTypes.object,
  name: PropTypes.string,
  id: PropTypes.string,
  url: PropTypes.string
  
};
