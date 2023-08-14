/* eslint-disable react/prop-types */

import { Pagination } from "react-bootstrap";

export const Paginacion = ({ meta, onclick }) => {
  let paginaFinal = meta.last_page <= 5 ? meta.last_page : 5;
  let btnAnterior;
  let btnSiguiente;
  let paginaInicial = 1;
  let totalPagina =
    (meta.current_page * meta.per_page) > meta.total
      ? meta.total
      : meta.current_page * meta.per_page;

  if (meta.current_page > 3) {
    paginaFinal = meta.current_page + 2;
    if (paginaFinal > meta.last_page) {
      let diferencia = paginaFinal - meta.last_page;
      paginaInicial = meta.current_page - 2 - diferencia;
      paginaFinal = meta.last_page;
    } else {
      paginaInicial = meta.current_page - 2;
    }
  }

  if (meta.current_page > 1) {
    btnAnterior = (
      <Pagination.Prev
        onClick={onclick}
        data-id={meta.current_page - 1}
        title={"Anterior"}
        className={"btn-pagination icon-prev"}
      />
    );
  }

  if (meta.current_page < meta.last_page) {
    btnSiguiente = (
      <Pagination.Next
        onClick={onclick}
        data-id={meta.current_page + 1}
        title={"Siguiente"}
        className={"btn-pagination icon-next"}
      />
    );
  }

  let paginas = [];
  paginaInicial = paginaInicial === 0 ? 1 : paginaInicial;
  for (let i = paginaInicial; i <= paginaFinal; i++) {
    let activa = "";
    if (i === meta.current_page) {
      activa = "page-active";
    }
    paginas.push(
      <Pagination.Item
        className="custom-pagination"
        onClick={onclick}
        data-id={i}
        key={i}
        active={i === meta.current_page}
      >
        {i}
      </Pagination.Item>
    );
  }

  if (meta.total > 0) {
    return (
      <Pagination className=" paginacion col-md-12 ">
        <span className="numPag col-lg-9 col-md-8 col-sm-8 col-6">
          {totalPagina} de {meta.total}
        </span>
        {btnAnterior}
        {paginas.length > 1 ? paginas : []}
        {btnSiguiente}
      </Pagination>
    );
  } else {
    return <></>;
  }
};
export default Pagination;
