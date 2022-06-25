import { Link } from "react-router-dom";
import Container from "../Components/Container";
import WelcomeCard from "../Components/WelcomeCard";

export default function Welcome() {
  return (
    <Container>
      <Link className="text-decoration-none" to="/home">
        <WelcomeCard />
      </Link>
    </Container>
  );
}
