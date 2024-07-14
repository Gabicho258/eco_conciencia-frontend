import { useState } from "react";
import {
  useCreateUserMutation,
  useLoginUserMutation,
} from "../../app/ecoCiencia.api";
import { IUser } from "../../interfaces";
import "./_Register.scss";
import { Alert, Snackbar, SnackbarOrigin } from "@mui/material";

interface State extends SnackbarOrigin {
  open: boolean;
  message: string;
}

export default function Register() {
  const [createUser, { isLoading: isCreationLoading }] =
    useCreateUserMutation();
  const [loginUser, { isLoading: isLoginLoading }] = useLoginUserMutation();
  // notification
  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "right",
    message: "Error al iniciar sesión con Google",
  });
  const { vertical, horizontal, open } = state;
  const handleClick = (newState: SnackbarOrigin, message: string) => {
    setState({ ...newState, open: true, message });
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setState({ ...state, open: false });
  };
  ///////////
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    console.log("first", isLoginLoading);
    console.log("first", isCreationLoading);
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
      window.location.href = "/home";
    } catch (error) {
      handleClick(
        { vertical: "top", horizontal: "right" },
        `El correo ya se encuentra registrado`
      );
      // alert(JSON.stringify(error));
    }
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {state.message}
        </Alert>
      </Snackbar>
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
          <button
            className="containerRegister__buttonForm"
            disabled={isCreationLoading || isLoginLoading}
          >
            Siguiente
          </button>
        </form>
      </div>
    </>
  );
}
