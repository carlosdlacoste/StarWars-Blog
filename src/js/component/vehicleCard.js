import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {Context} from "../store/appContext.js"

export const VehicleCard = (props) => {
    const [vehicle, setVehicle] = useState([]);
    const navigate = useNavigate();
    const {actions} = useContext(Context)

    useEffect(() => {
    async function loadVehicle(){
			try{
				const resp = await fetch(`${props.url}`)
				const data = await resp.json()
                // console.log(data.result.properties)
				setVehicle(data.result.properties)
			}catch(err){
				console.log(err)
			}
		}
		loadVehicle();
    }, [])

    return (
        <div className="card border border-warning" style={{ width: "18rem" }}>
            <img src="https://lumiere-a.akamaihd.net/v1/images/5ff895e40d603e0001462c74-image_ac3b4d2b.jpeg?region=0,0,1536,864&width=1200" className="card-img-top" alt="..." style={{ maxHeight: '200px', objectFit: 'cover' }}/>
            <div className="card-body d-flex flex-column align-items-start">
            <h5 className="card-title text-truncate">{props.name}</h5>
            <p className="card-text text-start text-truncate" style={{width: "16rem"}}>
                Manufacturer:{" "}{vehicle.manufacturer}
            </p>
            <p className="card-text text-start">
                Cost-in-Credits:{" "}{vehicle.cost_in_credits}
            </p>
            <p className="card-text text-start">
                Passengers:{" "}{vehicle.passengers}
            </p>
            <div className="d-flex flex-row justify-content-between" style={{ width: "100%" }}>
                <button className="btn btn-primary" onClick={() => navigate(`/vehicle/${props.id}`)}>Learn More!</button>
                <button type="button" className="btn btn-outline-warning" onClick={() => {actions.addToCart(props.item)}}>
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
    id: PropTypes.string,
    url: PropTypes.string

};