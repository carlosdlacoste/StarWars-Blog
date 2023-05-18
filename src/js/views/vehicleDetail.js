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
                        <h3 className="text-warning">{vehicle.name}</h3>
                        <p className="text-warning">{description.description}</p>
                        <p className="text-warning" style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="border-top border-warning border-4 my-3"></div>
                    <div className="col-2">
                        <h4 className="text-warning text-break">Model:</h4>
                        <p className="text-warning text-break fs-5">{vehicle.model}</p>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning text-break">Vehicle-Class:</h4>
                        <p className="text-warning text-break fs-5">{vehicle.vehicle_class}</p>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning text-break">Manufacturer:</h4>
                        <p className="text-warning text-break fs-5">{vehicle.manufacturer}</p>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning text-break">Cost-in-Credits:</h4>
                        <p className="text-warning text-break fs-5">{vehicle.cost_in_credits}</p>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning text-break">Passengers:</h4>
                        <p className="text-warning text-break fs-5">{vehicle.passengers}</p>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning text-break">Cargo-Capacity:</h4>
                        <p className="text-warning text-break fs-5">{vehicle.cargo_capacity}</p>
                    </div>
                </div>
            </div>
        
        </>
    );



};