import FormularioBusqueda from "./components/common/view/GestionarPublicidadExterior/FormularioBusqueda";
import { Route, Routes } from "react-router-dom";
import CrearNuevaSolicitud from "./components/common/view/NuevaSolicitud/CrearNuevaSolicitud";

function App() {
  return (
    <Routes>
      <Route path="/consultarElementos" element={<FormularioBusqueda />} />
      <Route path="/crearNuevaSolicitud" element={<CrearNuevaSolicitud />} />

    </Routes>
  );
}
export default App;
