import Instagram from "../Images/insta.jpg";

export default function Show(props) {
  return (
    <li className="row py-5">
      <div className="col-sm">
        <h2 className="py-3">
          {props.title}{" "}
          <a
            className="float-sm-end"
            target="_blank"
            rel="noopener noreferrer"
            href={props.instagram}
          >
            <img src={Instagram} alt="Instagram" width="50px" />
          </a>
        </h2>

        <hr />
        <p className="py-2">{`Local: ${props.local}`}</p>
        <p className="py-2">{`Personagem: ${props.character}`}</p>
        <p className="py-2">{`Diretor: ${props.director}`}</p>
        <p className="py-2">{`Produção: ${props.producer}`}</p>
      </div>
      <div className="col-sm  d-flex align-items-sm-center justify-content-sm-end">
        <img src={props.src} alt={`${props.alt}`} className="img-fluid w-25" />
      </div>
    </li>
  );
}
