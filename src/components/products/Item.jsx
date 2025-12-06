import { Link } from "react-router-dom";
import { sendCart } from "./DetalleProducto";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Contador from "./Contador";

function Item({ categoria, modelo, precio, id, image, descripcion }) {
  const producto = { categoria, modelo, precio, id, image };

  const [cantidad, setCantidad] = useState(0); // Definimos el estado cantidad

  const handleAddToCart = () => {
    if (cantidad === 0) {
      Swal.fire({
        title: "Cantidad inválida",
        text: "Agregar al menos un producto al carrito",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }
    sendCart(producto, cantidad);
    setCantidad(0);
  };

  return (
    <div className='card'>
      <Link to={`/productos/${id}`}>
        <div>{categoria}</div>
        <div>
          <h3>{modelo}</h3>
        </div>
        <img className="imgProduct" src={image} alt="imagen del producto" loading="lazy" />
        <div>
          <strong>Precio: ${precio}</strong>
        </div>
      </Link>
      <Contador cantidad={cantidad} setCantidad={setCantidad} />
      <button onClick={handleAddToCart} className="buttonAdd" aria-label="Agregar al carrito">Agregar al carrito</button>
    </div>
  );
}

export default Item;
