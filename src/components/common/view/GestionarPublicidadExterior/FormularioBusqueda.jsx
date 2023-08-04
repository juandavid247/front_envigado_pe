import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import TablaClientes from "./TablaClientes";
import Buttons from "../../Buttons";

const FormularioBusqueda = () => {
  const [datos, setDatos] = useState([]);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    let apiUrl = import.meta.env.VITE_APP_URL_API_V1;
    const requestData = {
      numero_radicado: formData.nroRadicado,
      numero_oficio: formData.nroOficio,
      fecha_oficio: formData.fechaOficio,
      fecha_radicado: formData.fechaRadicado,
      identificacion_cliente: formData.nitCedula,
    };

    for (const key in requestData) {
      if (requestData[key]) {
        apiUrl += `${key}=${requestData[key]}&`;
      }
    }

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        setDatos(responseData.data); // Actualizar los datos con la nueva página
      } else {
        console.error("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
    }
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
              <Buttons
                color="btn-secondary"
                size="btn-sm"
                label="Buscar"
                onClick={handleSubmit}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <Buttons color="btn-secondary" size="btn-sm" label="Nuevo" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <Buttons color="btn-secondary" size="btn-sm" label="Tipo" />
            </div>
          </div>
        </Form>
        <br />
        <TablaClientes datos={datos} />
      </Container>
    </>
  );
};

export default FormularioBusqueda;
