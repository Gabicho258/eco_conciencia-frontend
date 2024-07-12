import './_Register.scss'

export default function Register() {
  return (
    <div className='containerRegister'>
      <h2>Únete a EcoConciencia</h2>
      <form className="containerRegister__form">
        <div className="containerRegister__form-email">
          <label>Correo</label>
          <input type="email" className="containerRegister__form-email-input" placeholder="example@example.com" />
        </div>
        <div className="containerRegister__form-name">
          <label>Nombre</label>
          <input type="text" className="containerRegister__form-name-input"  placeholder="My Username"/>
        </div>
        <div className="containerLogin__form-password">
          <label>Contraseña</label>
          <input type="password" className="containerRegister__form-password-input"/>
        </div>
      </form>
      <button className="containerRegister__buttonForm">Siguiente</button>
      <p className="containerRegister__help">¿Ya tienes una cuenta? <a href="">Ingresa</a></p>
    </div>
  );
}

