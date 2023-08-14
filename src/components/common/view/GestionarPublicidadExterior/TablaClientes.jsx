/* eslint-disable react/prop-types */
import { Col, Table } from "react-bootstrap";
import "../../../../styles/style.css";
import Buttons from "../../Buttons";

const TablaClientes = ({ datos }) => {
  // Datos de ejemplo para la tabla

  if (!datos) return null;

  return (
    <div className="d-flex justify-content-center">
      
      <Table striped className="table-custom table-hover" style={{ maxWidth: "100%" }}>
        <thead className="">
          <tr>
            <th className="table-resultado text-center">Nombre de Cliente</th>
            <th className="table-resultado text-center">Cédula/NIT</th>
            <th className="table-resultado text-center">Número de Oficio</th>
            <th className="table-resultado text-center">Número de Radicado</th>
            <th className="table-resultado text-center">Fecha de Radicado</th>
            <th className="table-resultado text-center">Estado</th>
            <th className="table-resultado text-center">Editar</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((cliente) => (
            <tr key={cliente.id}>
              {" "}
              {/* Agregar la clase highlighted a la fila */}
              <td>{cliente.id_solicitud_publicidad}</td>
              <td>{cliente.identificacion_cliente}</td>
              <td>{cliente.numero_oficio}</td>
              <td>{cliente.numero_radicado}</td>
              <td>{cliente.fecha_radicado}</td>
              <td className="text-center">{cliente.estado}</td>
              <td className="text-center">
                <Col className="col-12">
                  <Buttons color="btn-primary" size="btn-sm" label="1" />
                  <Buttons color="btn-danger" size="btn-sm" label="2" />
                </Col>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaClientes;
