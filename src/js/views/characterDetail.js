import React, {useState, useEffect} from "react";
import { useParams} from "react-router-dom";


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

                    </div>
                </div>
                <div className="row">
                    <div className="border-top border-warning border-4 my-3"></div>
                    <div className="col-2">
                        <h4 className="text-warning">Skin Color: {" "}{character.skin_color}</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Mass: {" "}{character.mass}</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Birth-Year: {" "}{character.birth_year}</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Height: {" "}{character.height}</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Hair-Color: {" "}{character.hair_color}</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Eye-Color: {" "}{character.eye_color}</h4>
                    </div>
                </div>
            </div>
        
        </>
    );



};
