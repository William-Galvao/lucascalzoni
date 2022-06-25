import welcome from "../Images/welcome.jpg";

export default function WelcomeCard() {
  return (
    <div className="card text-bg-dark mb-3" style={{ maxWidth: "80vh" }}>
      <div className="row g-0">
        <div className="col-md-4 w3-animate-top">
          <img src={welcome} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8 d-flex align-items-center w3-animate-bottom">
          <div className="card-body d-flex flex-column align-items-center ">
            <h1 className="card-title p-4 ">Seja bem vindo</h1>

            <p className="card-text p-4 fs-4 text-center">
              Clique aqui para conhecer um pouco da minha história e meus
              principais trabalhos como ator e cantor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
