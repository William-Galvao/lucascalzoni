export default function Nav() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 d-flex justify-content-around">
            <li className="nav-item fs-5">
              <a className="nav-link" href="#aboutme">
                Sobre mim
              </a>
            </li>
            <li className="nav-item fs-5">
              <a className="nav-link" href="#works">
                Principais trabalhos
              </a>
            </li>
            <li className="nav-item fs-5">
              <a className="nav-link" href="#gallery">
                Galeria
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
