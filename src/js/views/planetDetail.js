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
                <div className="row mb-3">
                    <div className="col-6">
                        <img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/09/hipertextual-tengo-mal-presentimiento-sobre-esto-todas-veces-que-han-dicho-star-wars-2020046719.jpg?resize=1500%2C1000&quality=50&strip=all&ssl=1" className="card-img-top" alt="..." style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="col-6">
                        <h3>{planet.name}</h3>
                        <p>{description.description}</p>

                    </div>
                </div>
                <div className="row">
                    <div className="border-top border-warning border-4 my-3"></div>
                    <div className="col-2">
                        <h4 className="text-warning">Diameter: {" "}{planet.diameter}</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Gravity: {" "}{planet.gravity}</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Population: {" "}{planet.population}</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Climate: {" "}{planet.climate}</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Terrain: {" "}{planet.terrain}</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Surface-Water: {" "}{planet.surface_water}</h4>
                    </div>
                </div>
            </div>
        
        </>
    );



};
