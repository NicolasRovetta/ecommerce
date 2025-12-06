import "./Layout.css";
import LogoW from "../../assets/logoEcommerce.png";
import CartWidget from "../cart/CartWidget";
import { Link, Outlet } from "react-router-dom";
import React, { useState } from 'react';
import logoWp from "../../assets/logoWp.png";

import { FaSun, FaMoon } from "react-icons/fa";
import AuthForm from "../auth/AuthForm";

function Layout({ isAuthenticated, handleLogin }) {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);
  const handleMenuItemClick = () => setMenuActive(false);

  const menuItems = [
    { to: "/", label: "Home", text: "Inicio" },
    { to: "productos", label: "Products", text: "Productos" },
    { to: "nosotros", label: "About us", text: "Nosotros" },
    { to: "cart", label: "Cart", text: <CartWidget /> },
  ];

  return (
    <>
      {!isAuthenticated && (
        <>
          <div className="blur-background"></div>
          <AuthForm onLogin={handleLogin} />
        </>
      )}
      <nav className="layout">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={menuActive ? 'active' : ''}>
          <li>
            <div className="logo">
              <img src={LogoW} alt="Logo" />
            </div>
          </li>
          {menuItems.map(({ to, label, text }) => (
            <li key={to}>
              <Link to={to} aria-label={label} onClick={handleMenuItemClick}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
      <a href="https://wa.me/2323613016" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
        <img src={logoWp} alt="WhatsApp" className="wp-logo" />
      </a>
    </>
  );
}

export default Layout;