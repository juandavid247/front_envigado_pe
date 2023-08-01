// importar el css aqui


export const Buttons = (props) => {
  return (
    <div>
      <button className={`btn ${props.color} ${props.size}`}>{props.label}</button>
    </div>
  );
};

export default Buttons;
