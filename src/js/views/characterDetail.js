import React, {useState} from "react";
import { useParam, useNavigate, Link } from "react-router-dom";


export const CharacterDetail = (props) => {
    return(
        <>
            <div className="container">
                <div className="row mb-3">
                    <div className="col-6">
                        <img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/09/hipertextual-tengo-mal-presentimiento-sobre-esto-todas-veces-que-han-dicho-star-wars-2020046719.jpg?resize=1500%2C1000&quality=50&strip=all&ssl=1" className="card-img-top" alt="..." style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="col-6">
                        <p>Hola Mundo!</p>

                    </div>
                </div>
                <div className="row">
                    <div className="border-top border-warning border-4 my-3"></div>
                    <div className="col-2">
                        <h4 className="text-warning">Campo 1</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Campo 2</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Campo 3</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Campo 4</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Campo 5</h4>
                    </div>
                    <div className="col-2">
                        <h4 className="text-warning">Campo 6</h4>
                    </div>
                </div>
            </div>
        
        </>
    );



};
