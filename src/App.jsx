import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./pages/Principal.jsx";
import Contacto from "./pages/Contacto.jsx";
import Noticias from "./pages/Noticias.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/noticias" element={<Noticias />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
