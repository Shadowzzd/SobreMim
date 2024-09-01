import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Componentes/Paginas/Inicio/Inicio";
import SobreMim from "./Componentes/Paginas/SobreMim/SobreMIm";
import Menu from "./Componentes/Menu/Menu";

function App() {
  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/SobreMim" element={<SobreMim/>}/>
      <Route path="*" element={<div>Página não encontrada</div>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
