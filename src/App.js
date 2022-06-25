import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Welcome />} path="/" />
        <Route element={<Home />} path="/home" />
      </Routes>
    </div>
  );
}

export default App;
