import Aboutme from "../Images/aboutme.jpg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function AboutMe() {
  function getElapsedTime(dateString) {
    var today = new Date();
    var initialDate = new Date(dateString);
    var elapsedTime = today.getFullYear() - initialDate.getFullYear();
    var m = today.getMonth() - initialDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < initialDate.getDate())) {
      elapsedTime--;
    }
    return elapsedTime;
  }

  return (
    <div className="row mt-5" id="aboutme">
      <div className="col-sm-5">
        <img
          src={Aboutme}
          alt="Lucas Calzoni de frente"
          className="img-fluid w3-hover-grayscale"
        />
      </div>
      <div className="col-sm-7">
        <div className="py-5 mx-4 w3-animate-right">
          <h2>
            Olá! Meu nome é{" "}
            <strong>
              <span className="text-white ">Lucas Calzoni</span>
            </strong>
            .
          </h2>
          <hr />
          <p className="fs-5">
            Sou apaixonado pelas artes cênicas desde criança, quando já atuava
            nos teatros da escola, mas foi em 2018, durante uma viagem à Nova
            Iorque, que eu decidi abandonar o bacharelado em Petróleo e Gás me
            dedicar inteiramente aos palcos.
          </p>
          <h3 className="pt-3 text-white">
            <FontAwesomeIcon icon="circle-info" /> Detalhes{" "}
            <span
              className="fs-6 float-end"
              data-bs-toggle="collapse"
              href="#details"
            >
              Expandir <FontAwesomeIcon icon="circle-plus" />
            </span>
          </h3>
          <hr />
          <div className="collapse" id="details">
            <p className="text-white ">
              Ator (DRT: 54502/SP) | {getElapsedTime("02/02/1993")} anos | 1.80m
              | 75Kg
            </p>
          </div>
          <h3 className="pt-3 text-white">
            <FontAwesomeIcon icon="graduation-cap" /> Formação{" "}
            <span
              className="fs-6 float-end"
              data-bs-toggle="collapse"
              href="#formacao"
            >
              Expandir <FontAwesomeIcon icon="circle-plus" />
            </span>
          </h3>
          <hr />
          <div className="collapse" id="formacao">
            <ul>
              <li className="fs-6 text-white">Belting Contemporâneo</li>
              <p>
                com Tiago Bezerra / Professor capacitado pelo Studio Marconi
                Araújo
              </p>
              <li className="fs-6 text-white">Ballet Clássico</li>
              <p>
                com Alessandra Lona / Instituto das Artes Luana Lopes
                (Campinas/SP)
              </p>
              <li className="fs-6 text-white">
                A Técnica do Ator, de Ivana Chubbuck + Método Comparato, de
                Lorena Comparato
              </li>
              <p>com Marina Rigueira / Remoto pelo nutror.com </p>
              <li className="fs-6 text-white">Atuação para TV e Cinema</li>
              <p>com Moisés Bittencourt / Remoto </p>
            </ul>
          </div>
          <h3 className="pt-3 text-white">
            <FontAwesomeIcon icon="people-group" /> Workshops{" "}
            <span
              className="fs-6 float-end"
              data-bs-toggle="collapse"
              href="#workshops"
            >
              Expandir <FontAwesomeIcon icon="circle-plus" />
            </span>
          </h3>
          <hr />
          <div className="collapse" id="workshops">
            <ul>
              <li className="fs-6 text-white">Preparatório para TV</li>
              <p>com Marcelo Zambelli / Remoto</p>
              <li className="fs-6 text-white">
                Preparatório para Atores e Apresentadores
              </li>
              <p>com Blad Meneghel / Remoto</p>
              <li className="fs-6 text-white">Intensivo de Teatro Musical</li>
              <p>
                com Reiner Tenente, Betto Serrador, Sueli Guerra e Patrícia
                Carillo / Centro de Estudos e Formação em Teatro Musical (Rio de
                Janeiro/RJ)
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
