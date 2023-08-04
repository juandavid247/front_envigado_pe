/* eslint-disable react/prop-types */
import { Table } from "react-bootstrap";
import "../../../../styles/style.css";
import Buttons from "../../Buttons";

const TablaClientes = ({ datos }) => {
  // Datos de ejemplo para la tabla

  if (!datos) return null;

  return (
    <div className="d-flex justify-content-center">
      {/* Aplicar la clase table-custom a la tabla */}
      <Table className="table-custom" style={{ maxWidth: "100%" }}>
        <thead>
          <tr>
            <th>Nombre de Cliente</th>
            <th>Cédula/NIT</th>
            <th>Número de Oficio</th>
            <th>Número de Radicado</th>
            <th>Fecha de Radicado</th>
            <th>Estado</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((cliente) => (
            <tr key={cliente.id} className="highlighted">
              {" "}
              {/* Agregar la clase highlighted a la fila */}
              <td>{cliente.id_solicitud_publicidad}</td>
              <td>{cliente.identificacion_cliente}</td>
              <td>{cliente.numero_oficio}</td>
              <td>{cliente.numero_radicado}</td>
              <td>{cliente.fecha_radicado}</td>
              <td>{cliente.estado}</td>
              <td className="col-md-1">
                <td>
                  <Buttons color="btn-primary" size="btn-sm" label="1" />
                </td>
                <td>
                  <Buttons color="btn-danger" size="btn-sm" label="2" />
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaClientes;
