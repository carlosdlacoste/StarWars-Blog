import React, {useEffect, useContext} from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/characterCard.js";
import {Context} from "../store/appContext.js"

export const Home = () => {
  const {store, actions} = useContext(Context)

  useEffect(() => {
    actions.loadCharacters();
  }, []);

  return(

    <>
      {/* {store.characters.map((character, index) => ( */}

          <div >
            <CharacterCard
              // name={character.name}
              // gender={character.gender}
              // hairColor={character.hairColor}
              // eyeColor={character.eyeColor}
            />
          </div>

        {/* )) */}

      {/* } */}
    </>
  );

};

