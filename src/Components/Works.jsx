import aladdin from "../Images/shows/aladdin.png";
import guardioes from "../Images/shows/guardioes.png";
import hairspray from "../Images/shows/hairspray.png";
import mammamia from "../Images/shows/mammamia.png";
import moana from "../Images/shows/moana.png";
import reidoshow from "../Images/shows/reidoshow.png";
import viva from "../Images/shows/viva.png";
import Show from "./Show";

export default function Works() {
  const shows = [
    mammamia,
    reidoshow,
    moana,
    hairspray,
    guardioes,
    viva,
    aladdin,
  ];

  return (
    <div id="works">
      <hr />
      <div className="d-flex justify-content-center my-5">
        <div>
          <h1 className="text-white">Principais trabalhos</h1>
        </div>
      </div>
      <div className="mt-5 text-center">
        {shows.map((show) => (
          <Show key={show} link={show} src={show} alt={show} />
        ))}
      </div>
    </div>
  );
}
