import React from "react";
import "./style.css";
import iconInstagram from "../../images/icon-instagram.svg";
import iconWhatsapp from "../../images/icon-whatsapp.svg";

function Footer() {
    return (
        <div className="footer fixed-bottom">
            <footer className=" container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-body-secondary"> Desenvolvido por Letícia Trindade<br />
                        <a href="https://leticiatrindade.github.io/new-portfolio/">Veja meu portfólio</a></span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" href="https://www.instagram.com/prepara_abreuelima/" target="_blank"><img className="bi" width="24" height="24" src={iconInstagram} alt="Instagram"></img></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="https://wa.me/558137719493" target="_blank"><img className="bi" width="24" height="24" src={iconWhatsapp} alt="WhatsApp"></img></a></li>
                </ul>

            </footer>
        </div>
    );
}

export default Footer;
