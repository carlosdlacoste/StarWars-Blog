import React, {useEffect, useContext, useState} from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/characterCard.js";
import { Context } from "../store/appContext.js"
import { PlanetCard } from "../component/planetCard.js";
import { VehicleCard } from "../component/vehicleCard.js";

export const Home = () => {
  const {store, actions} = useContext(Context)
  const [characters, setCharacters] = useState([])
  const [planets, setPlanets] = useState([])
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    // actions.loadCharacters();
    // actions.printCharacters();
    async function loadCharacters(){
			try{
				const resp = await fetch(`https://www.swapi.tech/api/people`)
				const data = await resp.json()
        console.log(data.results)
				setCharacters(data.results)
			}catch(err){
				console.log(err)
			}
		}
		loadCharacters();

    async function loadPlanets(){
			try{
				const resp = await fetch(`https://www.swapi.tech/api/planets`)
				const data = await resp.json()
        console.log(data.results)
				setPlanets(data.results)
			}catch(err){
				console.log(err)
			}
		}
		loadPlanets();

    async function loadVehicles(){
			try{
				const resp = await fetch(`https://www.swapi.tech/api/vehicles`)
				const data = await resp.json()
        console.log(data.results)
				setVehicles(data.results)
			}catch(err){
				console.log(err)
			}
		}
		loadVehicles();


  }, []);

  return(
    
    <>
      <div className="container">
        <h2>Characters</h2>
        <div className="d-flex flex-wrap">

          {characters.map((character) => (
              <div key={character.uid} className="m-2">
                <CharacterCard
                  item={character}
                  name={character.name}
                  key={character.uid}
                  url={character.url}
                />
              </div>

            ))  

          }  
        </div>
        <h2>Planets</h2>
        <div className="d-flex flex-wrap">

          {planets.map((planet) => (
              <div key={planet.uid} className="m-2">
                <PlanetCard
                  item={planet}
                  name={planet.name}
                  key={planet.uid}
                  url={planet.url}
                />
              </div>

            ))  

          }  
        </div>
        <h2>Vehicles</h2>
        <div className="d-flex flex-wrap">

          {vehicles.map((vehicle) => (
              <div key={vehicle.uid} className="m-2">
                <VehicleCard
                  item={vehicle}
                  name={vehicle.name}
                  key={vehicle.uid}
                  url={vehicle.url}
                />
              </div>

            ))  

          }  
        </div>
      </div>
    </>
  );

};

