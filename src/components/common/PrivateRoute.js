// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import { useAuth } from "../../context/AuthContext";
// import React, { Fragment, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import DivLoading from "./DivLoading";

// export default function PrivateRoute({ children, item, nombre }) {
//   const { isLogged, validateSession } = useAuth();

//   useEffect(() => {
//     validateSession();
//   }, []);

//   if (isLogged === false) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <Fragment>
//       <DivLoading />
//       {isLogged ? children : <></>}
//     </Fragment>
//   );
// }
