import React from "react";
import "./style.css";
import Acompanhamento from "../../components/Acompanhamento";
import acompanhamentos from "../../services/acompanhamentos";

function Acompanhamentos() {

    return (
        <div className="container">
            <h1>Acompanhamentos</h1>
            <div className="row">
                {acompanhamentos.map(acompanhamento => (
                    <div key={acompanhamento.id} className="col-md-3">
                        <Acompanhamento
                            nome={acompanhamento.nome}
                            url={acompanhamento.url}
                            iconUrl={acompanhamento.iconUrl}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Acompanhamentos;
