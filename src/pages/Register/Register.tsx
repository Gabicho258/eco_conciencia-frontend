import { useNavigate } from "react-router-dom";
import {
  useCreateUserMutation,
  useLoginUserMutation,
} from "../../app/ecoCiencia.api";
import { IUser } from "../../interfaces";
import "./_Register.scss";

export default function Register() {
  const [createUser] = useCreateUserMutation();
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      name: { value: string };
      password: { value: string };
    };
    const { name, email, password } = target;
    const userToCreate: Partial<IUser> = {
      email: email.value,
      password: password.value,
      name: name.value,
      photo_url:
        "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg",
    };
    try {
      await createUser(userToCreate).unwrap();
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
      navigate("/home");
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };
  return (
    <div className="containerRegister">
      <h2>Únete a EcoConciencia</h2>
      <form
        className="containerRegister__form"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="containerRegister__form-email">
          <label>Correo</label>
          <input
            autoComplete="off"
            type="email"
            className="containerRegister__form-email-input"
            placeholder="example@example.com"
            name="email"
            required
          />
        </div>
        <div className="containerRegister__form-name">
          <label>Nombre</label>
          <input
            autoComplete="off"
            type="text"
            className="containerRegister__form-name-input"
            placeholder="My Username"
            name="name"
            required
          />
        </div>
        <div className="containerLogin__form-password">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            required
            className="containerRegister__form-password-input"
          />
        </div>
        <button className="containerRegister__buttonForm">Siguiente</button>
      </form>
      <p className="containerRegister__help">
        ¿Ya tienes una cuenta? <a href="">Ingresa</a>
      </p>
    </div>
  );
}
