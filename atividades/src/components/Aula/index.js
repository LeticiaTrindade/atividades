import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';
import iconAula from "../../images/icon-aula.png";

function Aula(props) {

    const isDisabled = props.formularioUrl === '#';


    return (
        <div className={`card aula mb-3 ${isDisabled ? 'disabled' : ''} `}>
           
                <div className="card-body">
                <Link to={props.formularioUrl} target="_blank" aria-disabled={isDisabled ? 'true' : 'false' } style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}><img src={iconAula} className="card-img-top" alt="Ícone representando a aula" /></Link>
                    <h1  className="card-title">{props.nome}</h1>
                </div>
            
        </div>
    );
}

export default Aula;
