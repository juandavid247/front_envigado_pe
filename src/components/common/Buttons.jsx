/* eslint-disable react/prop-types */
import '../../icons/img/Buscar.png'

const Buttons = (props) => {

  return (
    <>
      <button className={`btn ${props.tipo} ${props.size}`}></button>
    </>
  );
};

export default Buttons;