# 🛒 E-Commerce Web Application

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-ISC-blue.svg)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=flat&logo=firebase)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)

Una aplicación web de comercio electrónico moderna, rápida y escalable, construida con React y Vite. Este proyecto ofrece una experiencia de usuario fluida con integración de pagos, autenticación y un diseño responsivo.

🔗 **Demo:** [https://NicolasRovetta.github.io/e-commerce](https://NicolasRovetta.github.io/e-commerce)

## 📑 Tabla de Contenidos

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Tecnologías](#-tecnologías)
- [Características Principales](#-características-principales)
- [Instalación y Uso](#-instalación-y-uso)
  - [Prerrequisitos](#prerrequisitos)
  - [Pasos de Instalación](#pasos-de-instalación)
  - [Variables de Entorno](#variables-de-entorno)
- [Despliegue](#-despliegue)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Autor](#-autor)

---

## 📖 Sobre el Proyecto

Este proyecto es una plataforma de e-commerce diseñada para proporcionar una navegación intuitiva y un proceso de compra eficiente. Integra servicios modernos para gestión de datos y pagos, asegurando una operación robusta y segura.

## 🛠 Tecnologías

El proyecto está construido utilizando las siguientes tecnologías y librerías:

*   **Core:** [React](https://reactjs.org/) (v18), [Vite](https://vitejs.dev/)
*   **Lenguaje:** JavaScript (ES6+), HTML5, CSS3
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
*   **Enrutamiento:** [React Router DOM](https://reactrouter.com/)
*   **Backend / BaaS:** [Firebase](https://firebase.google.com/) (Autenticación y Base de datos)
*   **Pagos:** [MercadoPago SDK](https://www.mercadopago.com.ar/developers/es/docs/sdks-library/client-side/js)
*   **Utilidades:** Axios (Peticiones HTTP), SweetAlert2 (Alertas modales), React Icons.

## ✨ Características Principales

*   ✅ **Catálogo de Productos:** Visualización dinámica de productos con detalles.
*   ✅ **Carrito de Compras:** Gestión de productos en el carrito (agregar, eliminar, totales).
*   ✅ **Autenticación de Usuarios:** Registro e inicio de sesión seguro mediante Firebase.
*   ✅ **Pasarela de Pagos:** Integración con MercadoPago para procesar transacciones.
*   ✅ **Diseño Responsivo:** Interfaz adaptada a dispositivos móviles y escritorio.
*   ✅ **Notificaciones:** Feedback visual al usuario mediante SweetAlert2.

## 🚀 Instalación y Uso

Sigue estos pasos para correr el proyecto en tu entorno local.

### Prerrequisitos

*   Node.js (v16 o superior)
*   npm o pnpm

### Pasos de Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/NicolasRovetta/e-commerce.git
    cd e-commerce
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # o si usas pnpm
    pnpm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

### Variables de Entorno

Para que la aplicación funcione correctamente (especialmente Firebase y MercadoPago), necesitas configurar las variables de entorno. Crea un archivo `.env` en la raíz del proyecto basándote en el siguiente ejemplo:

```env
VITE_API_KEY=tu_api_key_firebase
VITE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
VITE_PROJECT_ID=tu_project_id
VITE_STORAGE_BUCKET=tu_storage_bucket
VITE_MESSAGING_SENDER_ID=tu_sender_id
VITE_APP_ID=tu_app_id
VITE_MP_PUBLIC_KEY=tu_clave_publica_mercadopago
```

## 📦 Despliegue

El proyecto está configurado para desplegarse fácilmente en **GitHub Pages** utilizando el paquete `gh-pages`.

Para desplegar una nueva versión:

```bash
npm run deploy
```

Este comando ejecutará el build de producción y subirá el contenido de la carpeta `dist` a la rama `gh-pages`.

## 📂 Estructura del Proyecto

```
e-commerce/
├── public/              # Archivos estáticos públicos
├── src/
│   ├── assets/          # Imágenes y recursos estáticos
│   ├── components/      # Componentes reutilizables de React
│   │   ├── auth/        # Login, Registro, etc.
│   │   ├── cart/        # Carrito, Item de carrito...
│   │   ├── home/        # Componentes de la página principal
│   │   ├── layout/      # Navbar, Footer, Layout principal
│   │   └── products/    # Cartas de producto, listas, detalles
│   ├── data/            # Datos estáticos o mock data
│   ├── firebase/        # Configuración de Firebase
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada de la aplicación
│   └── index.css        # Estilos globales y Tailwind imports
├── .env                 # Variables de entorno (no subir al repo)
├── package.json         # Dependencias y scripts
├── tailwind.config.js   # Configuración de Tailwind
└── vite.config.js       # Configuración de Vite
```

## 👤 Autor

**Nicolas Rovetta**

*   Github: [@NicolasRovetta](https://github.com/NicolasRovetta)

---
Hecho con 💙 por Nicolas Rovetta.
