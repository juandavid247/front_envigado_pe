import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import TablaClientes from "./TablaClientes";
import Buttons from "../../Buttons";
import { Paginacion } from "../../Pagination";

const FormularioBusqueda = () => {
  const [datos, setDatos] = useState([]);
  const [showCrearNuevaSolicitud, setShowCrearNuevaSolicitud] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [meta, setMeta] = useState({
    current_page: 1,
    last_page: 1,
    per_page: 10, // ajusta el valor según corresponda
    total: 0,
  });
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

  const consultarSolicitudes = async (page) => {
    event.preventDefault();

    let apiUrl = import.meta.env.VITE_APP_URL_API_V1;

    const requestData = {
      numero_radicado: formData.nroRadicado,
      numero_oficio: formData.nroOficio,
      fecha_oficio: formData.fechaOficio,
      fecha_radicado: formData.fechaRadicado,
      identificacion_cliente: formData.nitCedula,
      page: page,
      per_page: meta.per_page,
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
        setDatos(responseData.data);
        setMeta(responseData.meta);
        setCurrentPage(responseData.current_page);
        console.log(responseData.meta);
      } else {
        console.error("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
    }
  };

  let handleClick = (e) => {
    let page = e.target.dataset.id;
    console.log(page);
    consultarSolicitudes(page);
  };

  const nuevaSolicitud = () => {
    setShowCrearNuevaSolicitud(true);  
  };

  return (
    <>
      <Container className="mt-4" style={{ maxWidth: "100%" }}>
        <Form onSubmit={consultarSolicitudes}>
          <div style={{ maxWidth: "100%" }}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Form.Label>Nro. Oficio:</Form.Label>
                  <Form.Control
                    type="input"
                    name="nroOficio"
                    value={formData.nroOficio}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Form.Label>Nit/Cédula:</Form.Label>
                  <Form.Control
                    type="input"
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
                    type="input"
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
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
              <Buttons
                tipo="buscar"
                size="btn-sm"
                onClick={handleClick}

              />
            </div>
        </Form>
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-right"></div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-right">
            <Buttons
                tipo="nuevo"
                size="btn-sm"
                onClick={nuevaSolicitud}
              />            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-right">
            <Buttons
                tipo="tipoElemento"
                size="btn-sm"
                onClick={handleClick}
              />            </div>
          </div>
        <br />
        <TablaClientes datos={datos} />
        <Paginacion meta={meta} onclick={handleClick} />
      </Container>
    </>
  );
};

export default FormularioBusqueda;
