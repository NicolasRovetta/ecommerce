import { useState } from "react";
import "./AuthForm.css";
import { registrarYGuardarUsuario, iniciarSesion } from "../../data/userCredentials.js";

function AuthForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      if (password.length < 6) {
        setError("La contraseña debe tener al menos 6 caracteres.");
        alert("La contraseña debe tener al menos 6 caracteres.");
        return; // Detiene la ejecución aquí, onLogin no se llama
      }
      try {
        if (isRegistering) {
          await registrarYGuardarUsuario(email, password, {});
        } else {
          await iniciarSesion(email, password);
        }
        onLogin(email, password);
        console.log("Credenciales guardadas:", { email, password });
      } catch (error) {
        console.error("Error durante el registro:", error);
        if (error.code === "auth/email-already-in-use") {
          setError("El correo electrónico ya está en uso.");
        } else if (error.code === "auth/invalid-email") {
          setError("El correo electrónico no es válido.");
        } else if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
          setError("Correo electrónico o contraseña incorrectos.");
        } else {
          setError("Error durante el registro");
          alert("Error durante el registro/contraseña inválida");
        }
      }
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div>
        <h3>{isRegistering ? "Registro" : "Login"}</h3>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="ingrese su email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          placeholder="********"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit" aria-label={isRegistering ? "Registrar" : "Login"}>
        {isRegistering ? "Registrar" : "Login"}
      </button>
      <button
        type="button"
        onClick={() => setIsRegistering(!isRegistering)}
        aria-label={isRegistering ? "¿Ya tienes una cuenta? Inicia sesión" : "¿No tienes una cuenta? Regístrate"}
      >
        {isRegistering ? "¿Ya tienes una cuenta? Inicia sesión" : "¿No tienes una cuenta? Regístrate"}
      </button>
    </form>
  );
}

export default AuthForm;
