import { Table, } from 'react-bootstrap';
import './style.css';
import Buttons from './components/common/Buttons'

const TablaClientes = () => {
  // Datos de ejemplo para la tabla
  const datosTabla = [
    {
      id: 1,
      nombreCliente: 'Juan Pérez',
      cedulaNit: '123456789',
      numeroOficio: '2023001',
      numeroRadicado: 'R202301',
      fechaRadicado: '2023-07-31',
      estado: 'Pendiente',
    },
    // Agregar más datos aquí...
  ];

  return (
    <div className="d-flex justify-content-center">
      {/* Aplicar la clase table-custom a la tabla */}
      <Table className="table-custom" style={{ maxWidth: "100%"}}>
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
          {datosTabla.map((cliente) => (
            <tr key={cliente.id} className="highlighted"> {/* Agregar la clase highlighted a la fila */}
              <td>{cliente.nombreCliente}</td>
              <td>{cliente.cedulaNit}</td>
              <td>{cliente.numeroOficio}</td>
              <td>{cliente.numeroRadicado}</td>
              <td>{cliente.fechaRadicado}</td>
              <td>{cliente.estado}</td>
              <td>
              <Buttons color="btn-primary" size="btn-sm" label="1" />

              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaClientes;
