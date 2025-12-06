import React from "react";

function Contador({ cantidad, setCantidad }) {
  return (
    <div className="counter">
      <button
        className="botonIncDec"
        onClick={() => setCantidad(cantidad > 0 ? cantidad - 1 : 0)}
        aria-label="Disminuir cantidad"
      >
        -
      </button>
      <span>{cantidad}</span>
      <button
        className="botonIncDec"
        onClick={() => setCantidad(cantidad < 5 ? cantidad + 1 : 5)}
        aria-label="Aumentar cantidad"
      >
        +
      </button>
    </div>
  );
}

export default Contador;
