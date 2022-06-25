import aladdin from "../Images/shows/aladdin.png";
import guardioes from "../Images/shows/guardioes.png";
import hairspray from "../Images/shows/hairspray.png";
import mammamia from "../Images/shows/mammamia.png";
import moana from "../Images/shows/moana.png";
import reidoshow from "../Images/shows/reidoshow.png";
import viva from "../Images/shows/viva.png";

export default function Works() {
  return (
    <div id="works" className="row">
      <hr />
      <div className="d-flex justify-content-center my-5">
        <div>
          <h1 className="text-white">Principais trabalhos</h1>
        </div>
      </div>
      <div className="col-sm mt-5">
        <img
          src={mammamia}
          alt="Banner do espetáculo Mamma Mia"
          className="img-fluid w-50 px-2"
        />
        <img
          src={mammamia}
          alt="Banner do espetáculo Mamma Mia"
          className="img-fluid w-50 px-2"
        />
      </div>

      <div className="col-sm mt-5">
        <img
          src={mammamia}
          alt="Banner do espetáculo Mamma Mia"
          className="img-fluid w-50 px-2"
        />
        <img
          src={mammamia}
          alt="Banner do espetáculo Mamma Mia"
          className="img-fluid w-50 px-2"
        />
      </div>
    </div>
  );
}
