import React from "react";
import "./style.css";
import Modulo from "../../components/Modulo";
import { useParams } from "react-router-dom";
import cursos from "../../services/cursos";

function Modulos() {
    const { curso: nomeDoCurso } = useParams();
    const cursoSelecionado = cursos.find(curso => curso.url === nomeDoCurso);

    const img = cursoSelecionado.iconUrl;

    console.log("Olá!  "+img);

    console.log(nomeDoCurso);
    console.log(cursoSelecionado);

    if (!cursoSelecionado) {
 
      return <div>Curso não encontrado</div>;
    }
  
    return (
        <div className="container">
        <h1>Módulos do Curso: {cursoSelecionado.nome}</h1>
        <div className="row">
          {cursoSelecionado.modulos.map(modulo => (
            <div className="col-md-4" key={modulo.id} iconUrl={modulo.iconUrl}>
            <Modulo
              nome={modulo.nome}
              url={modulo.url}
              iconUrl={modulo.iconUrl}
            />
            </div>
          ))}
        </div>
      </div>
    );
}

export default Modulos;
