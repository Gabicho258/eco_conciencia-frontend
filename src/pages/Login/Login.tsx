import "./_Login.scss";
export const Login = () => {
  return (
    <div className="containerLogin">
      <h2>Ingresa a EcoConciencia</h2>
      <form className="containerLogin__form">
        <div className="containerLogin__form-email">
          <label>Correo</label>
          <input type="email" className="containerLogin__form-email-input" placeholder="example@example.com" />
        </div>
        <div className="containerLogin__form-password">
          <label>Contraseña</label>
          <input type="password" className="containerLogin__form-password-input"/>
        </div>
      </form>
      <button className="containerLogin__buttonForm">Siguiente</button>
      <p className="containerLogin__help">¿No tienes cuenta? <a href="">Regístrate</a></p>
    </div>
  );
};
