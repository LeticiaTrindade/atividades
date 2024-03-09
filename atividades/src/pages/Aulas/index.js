import React from "react";
import "./style.css";
import Aula from "../../components/Aula";
import { useParams } from "react-router-dom";
import cursos from "../../services/cursos";

function Aulas() {
    const { curso: nomeDoCurso, modulo: nomeDoModulo } = useParams();
    const cursoSelecionado = cursos.find(curso => curso.url === nomeDoCurso);

    console.log("curso:", nomeDoCurso);
    console.log("modulo:", nomeDoModulo);
    console.log("curso selecionado:", cursoSelecionado);

    if (!cursoSelecionado) {
        return <div>Curso não encontrado</div>;
    }

    const moduloSelecionado = cursoSelecionado.modulos.find(modulo => modulo.url === nomeDoModulo);

    console.log("modulo Selecionado:", moduloSelecionado);

    if (!moduloSelecionado) {
        return <div>Módulo não encontrado</div>;
    }

    return (
        <div className="container">
            <h1>Aulas do Módulo: {moduloSelecionado.nome}</h1>
            <div className="row">
                {moduloSelecionado.aulas.map(aula => (
                    <div key={aula.id} className="col-md-3">
                        <Aula
                            nome={aula.nome}
                            url={aula.url}
                            iconUrl={aula.iconUrl}
                            formularioUrl={aula.formularioUrl}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Aulas;
