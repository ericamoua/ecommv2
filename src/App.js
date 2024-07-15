import "./App.css";
import Home from "./Pages/Home.jsx";
import Plants from "./Pages/Plants.jsx";
import Contact from "./Pages/Contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<Plants />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
