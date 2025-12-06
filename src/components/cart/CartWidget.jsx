import cart from '../../assets/cartWidget.png';
import { useState, useEffect } from 'react';
import { addProductCart } from '../products/DetalleProducto';
import './CartWidget.css';

function CartWidget() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCartCount(addProductCart.length);
    }, 0);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="cartPosition">
        <img src={cart} alt="logoCart" className='logoCart' />
        <div>Carrito ({cartCount})</div>
      </div>
    </>
  );
}

export default CartWidget;