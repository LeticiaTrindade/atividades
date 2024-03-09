import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

function Curso(props) {
    return (
        <div className="curso card mb-3">
           
            <div className="card-body ">
            <Link to={`/atividades/${props.url}`}>
                <img src={props.iconUrl} className="card-img-top" alt="Ícone representando o curso" />
            </Link>
                <h1 className="card-title">{props.nome}</h1>

                <p className="card-text">{props.disciplinas.join(", ")}</p>
            </div>
        </div>
    );
}

export default Curso;
