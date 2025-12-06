import { useParams } from "react-router-dom";
import Error from "../layout/Error";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Contador from "./Contador"; // Importa  componente Contador
import "./DetalleProducto.css";

export const addProductCart = [];

export const sendCart = (producto, cantidad) => {
  addProductCart.push(...Array(cantidad).fill(producto));
  console.log("Productos en el carrito:", addProductCart);
  Swal.fire({
    title: "Producto agregado",
    text: "El producto ha sido agregado al carrito",
    icon: "success",
    confirmButtonText: "Aceptar",
  });
};

export const counter = (initialValue = 0) => {
  let count = initialValue;
  return {
    increment: () => count < 5 && count++ && { cantidad } == 0,
    decrement: () => count > 0 && count--,
    getCount: () => count,
  };
};

function DetalleProducto() {

  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    const fetchProducto = async () => {
      const db = getFirestore();
      const productoDoc = doc(db, "productos", id);
      const productoSnapshot = await getDoc(productoDoc);
      setProducto(
        productoSnapshot.exists()
          ? { id: productoSnapshot.id, ...productoSnapshot.data() }
          : null
      );
      setLoading(false);
    };
    fetchProducto();
  }, [id]);

  const handleAddToCart = () => {
    if (cantidad === 0) {
      Swal.fire({
        title: "Cantidad inválida",
        text: "Debe agregar al menos un producto al carrito",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }
    sendCart(producto, cantidad);
    setCantidad(0);
  };

  if (loading) return <div className="loadingScreen">Cargando...</div>;
  if (!producto)
    return (
      <div className="errorFullScreen">
        <Error />
      </div>
    );

  return (
    <div className="backgroundDetalleProducto app">
      <div className="detalleProducto ">
        <h2>{producto.modelo}</h2>
        <p>{producto.descripcion}</p>
        <h3>
          <strong>Precio: ${producto.precio}</strong>
        </h3>
        <div className="containerimg">
          <img className="imgProductDetalles" src={producto.image} alt="imagen producto" />
        </div>
        <Contador cantidad={cantidad} setCantidad={setCantidad} />
        <button className="agregarcart" onClick={handleAddToCart} aria-label="Agregar al carrito">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default DetalleProducto;
