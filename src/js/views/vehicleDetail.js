import React, {useState, useEffect} from "react";
import { useParams} from "react-router-dom";


export const VehicleDetail = (props) => {


    const { uid } = useParams();

    const [ vehicle, setVehicle ] = useState([]); 
    const [description, setDescription] = useState([])

    useEffect(() => {
        async function searchVehicleID(VehicleID) {
            
            try {
                let response = await fetch(`https://www.swapi.tech/api/vehicles/${VehicleID}`)
                let data = await response.json()
                setDescription(data.result)
                setVehicle(data.result.properties)
                
            } catch (error) {
                console.log(error)
            }
        }

        searchVehicleID(uid)

    }, [])



    return(
        <>
            <div className="container">
                <div className="row mb-3">
                    <div className="col-6">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/5ff895e40d603e0001462c74-image_ac3b4d2b.jpeg?region=0,0,1536,864&width=1200" className="card-img-top" alt="..." style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="col-6">
                        <h3>{vehicle.name}</h3>
                        <p>{description.description}</p>

                    </div>
                </div>
                <div className="row">
                    <div className="border-top border-warning border-4 my-3"></div>
                    <div className="col-2">
                        <h4 className="text-warning">Model: {" "}{vehicle.model}</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Vehicle-Class: {" "}{vehicle.vehicle_class}</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Manufacturer: {" "}{vehicle.manufacturer}</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Cost-in-Credits: {" "}{vehicle.cost_in_credits}</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Passengers: {" "}{vehicle.passengers}</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Cargo-Capacity: {" "}{vehicle.cargo_capacity}</h4>
                    </div>
                </div>
            </div>
        
        </>
    );



};