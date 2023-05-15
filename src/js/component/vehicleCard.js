import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const VehicleCard = (props) => {
    const [vehicle, setVehicle] = useState([]);
    useEffect(() => {
    async function loadVehicle(){
			try{
				const resp = await fetch(`${props.url}`)
				const data = await resp.json()
                console.log(data.result.properties)
				setVehicle(data.result.properties)
			}catch(err){
				console.log(err)
			}
		}
		loadVehicle();
    }, [])

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://lumiere-a.akamaihd.net/v1/images/5ff895e40d603e0001462c74-image_ac3b4d2b.jpeg?region=0,0,1536,864&width=1200" className="card-img-top" alt="..." style={{ maxHeight: '200px', objectFit: 'cover' }}/>
            <div className="card-body d-flex flex-column align-items-start">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text text-start">
                Manufacturer:{" "}{vehicle.manufacturer}
            </p>
            <p className="card-text text-start">
                Cost-in-Credits:{" "}{vehicle.cost_in_credits}
            </p>
            <p className="card-text text-start">
                Passengers:{" "}{vehicle.passengers}
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

VehicleCard.propTypes = {
    item: PropTypes.object,
    name: PropTypes.string,
    url: PropTypes.string

};