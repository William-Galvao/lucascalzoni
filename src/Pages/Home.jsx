import AboutMe from "../Components/AboutMe";
import Nav from "../Components/Nav";
import Timeline from "../Components/Timeline";

export default function Home() {
  return (
    <div className="w3-animate-opacity user-select-none">
      <Nav />
      <AboutMe />
      <Timeline />
    </div>
  );
}
