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
                  <li>
                    <h3 className="p-3">Aladdin</h3>
                    <p>Local: Instituto das Artes Luana Lopes</p>
                    <p>Personagem: Sultão</p>
                    <p>Direção: Gustavo Pires</p>
                    <p>Produção: Instituto das Artes Luana Lopes</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item m-1">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                2020
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <h3 className="p-3">A Origem dos Guardiões</h3>
                    <p>Local: Instituto das Artes Luana Lopes</p>
                    <p>Personagem: Breu</p>
                    <p>Direção: Vinicius Conrad</p>
                    <p>Produção: Instituto das Artes Luana Lopes</p>
                  </li>
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
                  <li>
                    <h3 className="p-3">Viva A Vida é uma Festa</h3>
                    <p>Local: Theatro Municipal de Paulinia</p>
                    <p>Personagem: Pai do Miguel</p>
                    <p>Direção: Vinicius Conrad</p>
                    <p>Produção: Instituto das Artes Luana Lopes</p>
                  </li>
                  <li>
                    <h3 className="p-3">Hairspray</h3>
                    <p>Local: Auditório FCM da UNICAMP</p>
                    <p>Personagem: Corny Collins</p>
                    <p>Direção: Vinicius Conrad</p>
                    <p>Produção: Instituto das Artes Luana Lopes</p>
                  </li>
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
                  <li>
                    <h3 className="p-3">Moana</h3>
                    <p>
                      Local: Theatro Municipal de Paulinia | Teatro Municipal de
                      Campinas
                    </p>
                    <p>Personagem: Ensemble</p>
                    <p>Direção: Vinicius Conrad</p>
                    <p>Produção: Instituto das Artes Luana Lopes</p>
                  </li>
                  <li>
                    <h3 className="p-3">O Rei do Show</h3>
                    <p>
                      Local: Theatro Municipal de Paulinia | Teatro Municipal de
                      Campinas
                    </p>
                    <p>Personagem: Pai do Phillip Carlyle | Ensemble</p>
                    <p>Direção: Vinicius Conrad</p>
                    <p>Produção: Instituto das Artes Luana Lopes</p>
                  </li>
                  <li>
                    <h3 className="p-3">Mamma Mia</h3>
                    <p>Local: Auditório FCM da UNICAMP</p>
                    <p>Personagem: : Harry</p>
                    <p>Direção: Vinicius Conrad</p>
                    <p>Produção: Instituto das Artes Luana Lopes</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
