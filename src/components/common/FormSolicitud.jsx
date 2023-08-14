import { Form,  } from "react-bootstrap";

const FormSolicitud = () => {
  return (
    <div>
      <Container className="mt-4" style={{ maxWidth: "100%" }}>
        <h2>Formulario de Solicitud</h2>
        <Form onSubmit={btnNuevaSolicitud}>
          <div style={{ maxWidth: "100%" }}>
            <form action="">
              <h2>Solicitud</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Form.Label>Nro. Oficio:</Form.Label>
                  <Form.Control
                    type="input"
                    name="nroOficio"
                    value={formData.nroOficio}
                    onChange={eventoNewSolicitud}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Form.Label>Fecha Oficio:</Form.Label>
                  <Form.Control
                    type="date"
                    name="fechaOficio"
                    value={formData.fechaOficio}
                    onChange={eventoNewSolicitud}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Form.Label>Numero Radicado:</Form.Label>
                  <Form.Control
                    type="input"
                    name="nroRadicado"
                    value={formData.nroRadicado}
                    onChange={eventoNewSolicitud}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Form.Label>Fecha Oficio:</Form.Label>
                  <Form.Control
                    type="date"
                    name="fechaRadicado"
                    value={formData.fechaRadicado}
                    onChange={eventoNewSolicitud}
                  />
                </div>
              </div>
            </form>
            <form action="">
              <h2>Cliente</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Form.Label>Nit/Cedula:</Form.Label>
                  <Form.Control
                    type="input"
                    name="nitcedula"
                    value={formData.nitcedula}
                    onChange={eventoNewSolicitud}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Form.Label>Telefono:</Form.Label>
                  <Form.Control
                    type="date"
                    name="telefono"
                    value={formData.telefono}
                    onChange={eventoNewSolicitud}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Form.Label>Dirección de Cobro:</Form.Label>
                  <Form.Control
                    type="date"
                    name="direccionCobro"
                    value={formData.direccionCobro}
                    onChange={eventoNewSolicitud}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Form.Label> Correo Electrónico:</Form.Label>
                  <Form.Control
                    type="input"
                    name="correoElectonico"
                    value={formData.correoElectonico}
                    onChange={eventoNewSolicitud}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Form.Label>Empresa/Propietario:</Form.Label>
                  <Form.Control
                    type="date"
                    name="empresaPropietario:"
                    value={formData.empresaPropietario}
                    onChange={eventoNewSolicitud}
                  />
                </div>
              </div>
            </form>
          </div>
        </Form>
        
      </Container>
    </div>
  );
};

export default FormSolicitud;
