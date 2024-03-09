import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';


function Acompanhamento(props) {
    return (
        <div className="card mb-4">
            <Link to={props.url} target="_blank"><img src={props.iconUrl} className="card-img-top" alt="Ícone representando o acompanhamento" /></Link>
                <div className="card-body">
                    <h1  className="card-title">{props.nome}</h1>
                </div>
            
        </div>
    );
}

export default Acompanhamento;
