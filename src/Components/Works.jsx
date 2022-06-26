import moana from "../Images/shows/moana.png";
import aladdin from "../Images/shows/aladdin.png";
import guardioes from "../Images/shows/guardioes.png";
import hairspray from "../Images/shows/hairspray.png";
import mammamia from "../Images/shows/mammamia.png";
import reidoshow from "../Images/shows/reidoshow.png";
import viva from "../Images/shows/viva.png";
import Show from "./Show";

export default function Works() {
  return (
    <div id="works">
      <hr />
      <div className="d-flex justify-content-center my-5">
        <div>
          <h1 className="text-white">Principais trabalhos</h1>
        </div>
      </div>
      <div>
        <div className="accordion my-5" id="accordionExample">
          <div className="accordion-item m-1">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="true"
                aria-controls="collapseFour"
              >
                2021
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse show"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <Show
                    title="Aladdin"
                    local="Instituto das Artes Luana Lopes"
                    character="Sultão"
                    director="Gustavo Pires"
                    producer="Instituto das Artes Luana Lopes"
                    src={aladdin}
                    alt={aladdin}
                    link={aladdin}
                    instagram="https://www.instagram.com/p/CXW-FDHPlJT/?utm_source=ig_web_copy_link"
                  />
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item m-1">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                2020
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <Show
                    title="A Origem dos Guardiões"
                    local="Instituto das Artes Luana Lopes"
                    character="Breu"
                    director="Vinicius Conrad"
                    producer="Instituto das Artes Luana Lopes"
                    src={guardioes}
                    alt={guardioes}
                    link={guardioes}
                    instagram="https://www.instagram.com/p/CIiz-MTHEkF/?utm_source=ig_web_copy_link"
                  />
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item m-1">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                2019
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <Show
                    title="Viva A Vida é uma Festa"
                    local="Theatro Municipal de Paulinia"
                    character="Pai do Miguel"
                    director="Vinicius Conrad"
                    producer="Instituto das Artes Luana Lopes"
                    src={viva}
                    alt={viva}
                    link={viva}
                    instagram="https://www.instagram.com/p/B0rDPhsHjaq/?utm_source=ig_web_copy_link"
                  />
                  <Show
                    title="Hairspray"
                    local="Auditório FCM da UNICAMP"
                    character="Corny Collins"
                    director="Vinicius Conrad"
                    producer="Instituto das Artes Luana Lopes"
                    src={hairspray}
                    alt={hairspray}
                    link={hairspray}
                    instagram="https://www.instagram.com/p/B2o2TanHNZr/?utm_source=ig_web_copy_link"
                  />
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item m-1">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                2018
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <Show
                    title="Moana"
                    local="Theatro Municipal de Paulinia | Teatro Municipal
                        de Campinas"
                    character="Ensemble"
                    director="Vinicius Conrad"
                    producer="Instituto das Artes Luana Lopes"
                    src={moana}
                    alt={moana}
                    link={moana}
                    instagram="https://www.instagram.com/p/BrNxLJ8ntlu/?utm_source=ig_web_copy_link"
                  />
                  <Show
                    title="O Rei do Show"
                    local="Theatro Municipal de Paulinia | Teatro Municipal
                        de Campinas"
                    character="Pai do Phillip Carlyle | Ensemble"
                    director="Vinicius Conrad"
                    producer="Instituto das Artes Luana Lopes"
                    src={reidoshow}
                    alt={reidoshow}
                    link={reidoshow}
                    instagram="https://www.instagram.com/p/BpSA0EkgL0c/?utm_source=ig_web_copy_link"
                  />
                  <Show
                    title="Mamma Mia"
                    local="Auditório FCM da UNICAMP"
                    character="Harry"
                    director="Vinicius Conrad"
                    producer="Instituto das Artes Luana Lopes"
                    src={mammamia}
                    alt={mammamia}
                    link={mammamia}
                    instagram="https://www.instagram.com/p/BqiGhCkAD0-/?utm_source=ig_web_copy_link"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
