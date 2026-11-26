import "./index.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import ProjectTemplate from "./Pages/ProjectTemplate";
import Events from "./Pages/Events";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectTemplate />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
    </>
  )
};

export default App
