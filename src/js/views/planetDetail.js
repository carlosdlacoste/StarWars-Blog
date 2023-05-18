import React, {useState, useEffect} from "react";
import { useParams} from "react-router-dom";


export const PlanetDetail = (props) => {


    const { uid } = useParams();

    const [ planet, setPlanet ] = useState([]); 
    const [description, setDescription] = useState([])

    useEffect(() => {
        async function searchPlanetID(PlanetID) {
            
            try {
                let response = await fetch(`https://www.swapi.tech/api/planets/${PlanetID}`)
                let data = await response.json()
                setDescription(data.result)
                setPlanet(data.result.properties)
                
            } catch (error) {
                console.log(error)
            }
        }

        searchPlanetID(uid)

    }, [])



    return(
        <>
            <div className="container">
                <div className="row mb-3 justify-content-between">
                    <div className="col-6" >
                        <img src="https://www.lafinestradigital.com/wp-content/uploads/2011/09/starwars-planetes.jpg" className="card-img-top" alt="..." style={{ objectFit: 'cover'}} />
                    </div>
                    <div className="col-6">
                        <h3 className="text-warning">{planet.name}</h3>
                        <p className="text-warning">{description.description}</p>
                        <p className="text-warning" style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="border-top border-warning border-4 my-3"></div>
                    <div className="col-2">
                        <h4 className="text-warning text-break">Diameter:</h4>
                        <p className="text-warning text-break fs-5">{planet.diameter}</p>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning text-break">Gravity:</h4>
                        <p className="text-warning text-break fs-5">{planet.gravity}</p>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning text-break">Population:</h4>
                        <p className="text-warning text-break fs-5">{planet.population}</p>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning text-break">Climate:</h4>
                        <p className="text-warning text-break fs-5">{planet.climate}</p>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning text-break">Terrain:</h4>
                        <p className="text-warning text-break fs-5">{planet.terrain}</p>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning text-break">Surface-Water:</h4>
                        <p className="text-warning text-break fs-5">{planet.surface_water}</p>
                    </div>
                </div>
            </div>
        
        </>
    );



};
