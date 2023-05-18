import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {Context} from "../store/appContext.js"

export const PlanetCard = (props) => {
    const [planet, setPlanet] = useState([]);
    const navigate = useNavigate();
    const {actions} = useContext(Context)

    useEffect(() => {
    async function loadPlanet(){
			try{
				const resp = await fetch(`${props.url}`)
				const data = await resp.json()
                // console.log(data.result.properties)
				setPlanet(data.result.properties)
			}catch(err){
				console.log(err)
			}
		}
		loadPlanet();
    }, [])

    return (
        
        <div className="card border border-warning" style={{ width: "18rem" }}>
            <img src="https://www.lafinestradigital.com/wp-content/uploads/2011/09/starwars-planetes.jpg" className="card-img-top" alt="..." style={{ maxHeight: '200px', objectFit: 'cover' }}/>
            <div className="card-body d-flex flex-column align-items-start">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text text-start">
                Population:{" "}{planet.population}
            </p>
            <p className="card-text text-start text-truncate" style={{width: "16rem"}}>
                Terrain:{" "}{planet.terrain}
            </p>
            <div className="d-flex flex-row justify-content-between" style={{ width: "100%" }}>
                <button className="btn btn-primary" onClick={() => navigate(`/planet/${props.id}`)}>Learn More!</button>
                <button type="button" className="btn btn-outline-warning" onClick={() => {actions.addToCart(props.item)}}>
                    <i className="fa-regular fa-heart"></i>
                </button>
            </div>
            </div>
        </div>
    );
};

PlanetCard.propTypes = {
    item: PropTypes.object,
    name: PropTypes.string,
    id: PropTypes.string,
    url: PropTypes.string

};