// export default function Pagination({ meta, onclick }) {
//   let paginaFinal = meta.last_page <= 5 ? meta.last_page : 5;
//   let btnAnterior;
//   let btnSiguiente;
//   let paginaInicial = 1;
//   let totalPagina =
//     meta.current_page * meta.per_page > meta.total
//       ? meta.total
//       : meta.current_page * meta.per_page;

//   if (meta.current_page > 3) {
//     paginaFinal = meta.current_page + 2;
//     if (paginaFinal > meta.last_page) {
//       let diferencia = paginaFinal - meta.last_page;
//       paginaInicial = meta.current_page - 2 - diferencia;
//       paginaFinal = meta.last_page;
//     } else {
//       paginaInicial = meta.current_page - 2;
//     }
//   }

//   if (meta.current_page > 1) {
//     btnAnterior = (
//       <button
//         onClick={onclick}
//         data-id={meta.current_page - 1}
//         title={"Anterior"}
//         className={"btn-pagination icon-prev"}
//       ></button>
//     );
//   }

//   if (meta.current_page < meta.last_page) {
//     btnSiguiente = (
//       <button
//         onClick={onclick}
//         data-id={meta.current_page + 1}
//         title={"Siguiente"}
//         className={"btn-pagination icon-next"}
//       ></button>
//     );
//   }

//   let paginas = [];
//   paginaInicial = paginaInicial === 0 ? 1 : paginaInicial;
//   for (let i = paginaInicial; i <= paginaFinal; i++) {
//     let activa = "";
//     if (i === meta.current_page) {
//       activa = "page-active";
//     }
//     paginas.push(
//       <span
//         onClick={onclick}
//         data-id={i}
//         key={i}
//         className={`number-page ${activa}`}
//       >
//         {i}
//       </span>
//     );
//   }

//   if (meta.total > 0) {
//     return (
//       <div className="div-pagination">
//         <span className="numPag">
//           {totalPagina} de {meta.total}
//         </span>
//         {btnAnterior}
//         {paginas.length > 1 ? paginas : []}
//         {btnSiguiente}
//       </div>
//     );
//   } else {
//     return <></>;
//   }
// }
