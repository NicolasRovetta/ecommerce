import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import "./Cart.css";
import { addProductCart } from "../products/DetalleProducto";

import axios from "axios";

function Cart() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const itemCounts = addProductCart.reduce((acc, item) => {
      acc[item.id] = acc[item.id]
        ? { ...acc[item.id], count: acc[item.id].count + 1 }
        : { ...item, count: 1 };
      return acc;
    }, {});
    setCartItems(Object.values(itemCounts));
  }, []);

  const clearCart = () => {
    addProductCart.length = 0; // Vaciar el array
    setCartItems([]);
  };

  const handlePurchase = async (e) => {
    e.preventDefault();
    const total = cartItems.reduce((acc, item) => acc + item.precio * item.count, 0);
    const purchaseId = Math.floor(Math.random() * 1000000);
    const purchaseDetails = {
      id: purchaseId,
      items: cartItems,
      total: total,
    };

    Swal.fire({
      title: "Confirmar compra",
      text: `El total de su compra es $${total}. ¿Desea continuar?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, comprar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.post("https://api.mercadopago.com/checkout/preferences", {
            items: cartItems.map(item => ({
              title: item.modelo,
              quantity: item.count,
              currency_id: "ARS",
              unit_price: item.precio,
            })),
            back_urls: {
              success: "http://localhost:5176/success",
              failure: "http://localhost:5176/failure",
              pending: "http://localhost:5176/pending",
            },
            auto_return: "approved",
          }, {
            headers: {
              Authorization: `Bearer TEST-1474310529538889-031221-eb5988dd12e35ea2edee1c4c130f94bb-327361025`, // Reemplaza con tu nuevo token de acceso de Mercado Pago
            },
          });

          window.location.href = response.data.init_point; // Redirigir a la URL de pago de Mercado Pago
        } catch (error) {
          console.error("Error al crear la preferencia de pago:", error.response ? error.response.data : error.message);
          Swal.fire("Error", `Hubo un problema al procesar su compra: ${error.response ? error.response.data.message : error.message}. Inténtelo de nuevo.`, "error");
        }
      }
    });
  };

  return (
    <div className="containerCart">
      <div className="cart">
        {cartItems.length === 0 ? <h2>Carrito vacío</h2> : <h2>Carrito</h2>}
        <div className="cart-header">
          <button type="reset" onClick={clearCart} aria-label="Vaciar carrito" className="clear-cart-btn">
            Vaciar carrito
          </button>
          <div className="cart-summary">
            <h4>Total de productos: {cartItems.length}</h4>
            <h4>Total a pagar: ${cartItems.reduce((acc, item) => acc + item.precio * item.count, 0)}</h4>
          </div>
        </div>
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img className="imgProduct" src={item.image} alt="imagen del producto" />
              <div className="item-details">
                <div>
                  <span className="category">{item.categoria}</span>
                  <h3>{item.modelo}</h3>
                </div>
                <div>Precio: <strong>${item.precio}</strong></div>
                <div>Cant: <strong>{item.count}</strong></div>
                <div>Subtotal: <strong>${item.precio * item.count}</strong></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="formulario">
        <form onSubmit={handlePurchase}>
          <h2>Finalizar Compra</h2>
          <div className="form-group">
            <label>Nombre y apellido:</label>
            <input type="text" name="nombre y apellido" required placeholder="Ej: Juan Pérez" />
          </div>
          <div className="form-group">
            <label>Correo Electrónico:</label>
            <input type="email" name="correo" required placeholder="Ej: juan@email.com" />
          </div>
          <div className="form-group">
            <label>Teléfono:</label>
            <input type="tel" name="telefono" required placeholder="Ej: 1122334455" />
          </div>
          <button type="submit" className="buy" aria-label="Realizar pago">
            Realizar pago
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cart;