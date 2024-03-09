import React from "react";
import "./style.css";
import Curso from "../../components/Curso";
import cursos from "../../services/cursos";


function PaginaInicial() {
    return (
        <div className="container">
            <div className="row">
                {cursos.map(curso => (
                    <div key={curso.id} className="col-md-4">
                        <Curso
                            nome={curso.nome}
                            url={curso.url}
                            disciplinas={curso.disciplinas}
                            iconUrl={curso.iconUrl}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PaginaInicial;
