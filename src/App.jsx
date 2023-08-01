import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import TablaClientes from "./TablaClientes";
import Buttons from "./components/common/Buttons";

export const App = () => {
  const [formData, setFormData] = useState({
    nroOficio: "",
    nitCedula: "",
    nroRadicado: "",
    fechaOficio: "",
    fechaRadicado: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica de búsqueda con los datos ingresados.
    // Por ejemplo, puedes hacer una petición a una API para buscar los registros.
    console.log(formData);
  };
  return (
    <>
      <Container className="mt-4" style={{ maxWidth: "100%" }}>
        <h5 className="text-center mb-4">Gestionar publicidad exterior</h5>
        <Form onSubmit={handleSubmit}>
          <div style={{ maxWidth: "100%" }}>
            <Form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Form.Label>Nro. Oficio:</Form.Label>
                  <Form.Control
                    type="search"
                    name="nroOficio"
                    value={formData.nroOficio}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Form.Label>Nit/Cédula:</Form.Label>
                  <Form.Control
                    type="search"
                    name="nitCedula"
                    value={formData.nitCedula}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Form.Label>Nro. Radicado:</Form.Label>
                  <Form.Control
                    type="search"
                    name="nroRadicado"
                    value={formData.nroRadicado}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Form.Label>Fecha Oficio:</Form.Label>
                  <Form.Control
                    type="date"
                    name="fechaOficio"
                    value={formData.fechaOficio}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Form.Label>Fecha Radicado:</Form.Label>
                  <Form.Control
                    type="date"
                    name="fechaRadicado"
                    value={formData.fechaRadicado}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </Form>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <Buttons color="btn-primary" size="btn-sm" label="Buscar" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <Buttons color="btn-secondary" size="btn-sm" label="Nuevo" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <Buttons color="btn-danger" size="btn-sm" label="Tipo" />
            </div>
          </div>
        </Form>
        <br />
        <TablaClientes />
      </Container>
    </>
  );
};

export default App;
