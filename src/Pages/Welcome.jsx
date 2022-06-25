import { Link } from "react-router-dom";
import WelcomeCard from "../Components/WelcomeCard";

export default function Welcome() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center user-select-none">
      <Link className="text-decoration-none" to="/home">
        <WelcomeCard />
      </Link>
    </div>
  );
}
