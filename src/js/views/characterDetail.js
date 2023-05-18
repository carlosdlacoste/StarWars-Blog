import React, {useState, useEffect} from "react";
import { useParams} from "react-router-dom";
import "../../styles/detailView.css";


export const CharacterDetail = (props) => {


    const { uid } = useParams();

    const [ character, setCharacter ] = useState([]); 
    const [description, setDescription] = useState([])

    useEffect(() => {
        async function searchCharacterID(characterID) {
            
            try {
                let response = await fetch(`https://www.swapi.tech/api/people/${characterID}`)
                let data = await response.json()
                setDescription(data.result)
                setCharacter(data.result.properties)
                
            } catch (error) {
                console.log(error)
            }
        }

        searchCharacterID(uid)

    }, [])



    return(
        <>
            <div className="container">
                <div className="row mb-3">
                    <div className="col-6">
                        <img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/09/hipertextual-tengo-mal-presentimiento-sobre-esto-todas-veces-que-han-dicho-star-wars-2020046719.jpg?resize=1500%2C1000&quality=50&strip=all&ssl=1" className="card-img-top" alt="..." style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="col-6">
                        <h3 className="text-warning">{character.name}</h3>
                        <p className="text-warning">{description.description}</p>
                        <p className="text-warning" style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="border-top border-warning border-4 my-3"></div>
                    <div className="col-2">
                        <h4 className="text-warning text-break">Skin Color:</h4>
                        <p className="text-warning text-break fs-5">{character.skin_color}</p>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning text-break">Mass:</h4>
                        <p className="text-warning text-break fs-5">{character.mass}</p>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning text-break">Birth-Year:</h4>
                        <p className="text-warning text-break fs-5">{character.birth_year}</p>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning text-break">Height:</h4>
                        <p className="text-warning text-break fs-5">{character.height}</p>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning text-break">Hair-Color:</h4>
                        <p className="text-warning text-break fs-5">{character.hair_color}</p>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning text-break">Eye-Color:</h4>
                        <p className="text-warning text-break fs-5">{character.eye_color}</p>
                    </div>
                </div>
            </div>
        
        </>
    );



};
