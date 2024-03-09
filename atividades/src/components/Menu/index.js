import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

function Menu() {
    return (
        <nav className="  navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className=" container menu container-fluid">
                <a className="navbar-brand" href="/atividades"><img src="https://portaldoaluno.prepara.com.br/views/_img/logo-prepara.png?v=1.0" alt="Logo Prepara" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://portaldoaluno.prepara.com.br/login/" target="_blank">Portal do Aluno</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://portaldoaluno.prepara.com.br/qrcode" target="_blank">Baixe o APP</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="https://monkeytype.com/" target="_blank">Digitação</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/atividades/acompanhamentos">Acompanhamentos</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true" target="_blank">
                                Mouse</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
