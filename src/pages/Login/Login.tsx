import { useLoginUserMutation } from "../../app/ecoCiencia.api";
import "./_Login.scss";
export const Login = () => {
  // const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    const { email, password } = target;

    try {
      const userLoggedIn = await loginUser({
        email: email.value,
        password: password.value,
      }).unwrap();
      localStorage.setItem(
        "user_data",
        JSON.stringify({
          _id: userLoggedIn.user._id,
          token: userLoggedIn.token,
        })
      );
      window.location.href = "/home";
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };
  return (
    <div className="containerLogin">
      <h2>Ingresa a EcoConciencia</h2>
      <form
        className="containerLogin__form"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="containerLogin__form-email">
          <label>Correo</label>
          <input
            name="email"
            type="email"
            className="containerLogin__form-email-input"
            placeholder="example@example.com"
            autoComplete="off"
          />
        </div>
        <div className="containerLogin__form-password">
          <label>Contraseña</label>
          <input
            name="password"
            type="password"
            className="containerLogin__form-password-input"
          />
        </div>
        <button className="containerLogin__buttonForm">Siguiente</button>
      </form>
    </div>
  );
};
