import photo1 from "../Images/gallery/Hairspray2019.jpg";
import photo2 from "../Images/gallery/LucasCalzoni.jpg";
import photo3 from "../Images/gallery/LucasCalzoni2.jpg";
import photo4 from "../Images/gallery/ReiDoShow2018.jpg";
import photo5 from "../Images/gallery/ReiDoShow20182.jpg";
import photo6 from "../Images/gallery/Viva2019.jpg";
import Photo from "./Photo";

export default function Gallery() {
  const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

  return (
    <div id="gallery">
      <hr />
      <div className="d-flex justify-content-center my-5">
        <div>
          <h1 className="text-white">Galeria de fotos</h1>
        </div>
      </div>
      <div className="mt-5 text-center">
        {photos.map((photo) => (
          <Photo key={photo} link={photo} src={photo} alt={photo} />
        ))}
      </div>
    </div>
  );
}
