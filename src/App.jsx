import FormularioBusqueda from "./components/common/view/GestionarPublicidadExterior/FormularioBusqueda";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/consultarElementos" element={<FormularioBusqueda />} />
    </Routes>
  );
}
export default App;
