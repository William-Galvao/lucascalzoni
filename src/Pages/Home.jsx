import AboutMe from "../Components/AboutMe";
import Gallery from "../Components/Gallery";
import Nav from "../Components/Nav";
import Works from "../Components/Works";

export default function Home() {
  return (
    <div className="w3-animate-opacity user-select-none">
      <Nav />
      <AboutMe />
      <Works />
      <Gallery />
    </div>
  );
}
