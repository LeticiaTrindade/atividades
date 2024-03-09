import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

function Modulo(props) {
    return (
        <div className="card mb-3">
            
            <div className="card-body">
            <Link to={props.url}>
                <img src={props.iconUrl} className="card-img-top" alt="Ícone representando o módulo" />
            </Link>
                <h1 className="card-title">{props.nome}</h1>
            </div>
        </div>
    );
}



export default Modulo;
