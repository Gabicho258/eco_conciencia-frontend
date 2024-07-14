import { Alert, Snackbar, SnackbarOrigin } from "@mui/material";
import { useLoginUserMutation } from "../../app/ecoCiencia.api";
import "./_Login.scss";
import { useState } from "react";

interface State extends SnackbarOrigin {
  open: boolean;
  message: string;
}

export const Login = () => {
  // const navigate = useNavigate();
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
      handleClick(
        { vertical: "top", horizontal: "right" },
        "Correo o contraseña inválida"
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
          <button
            className="containerLogin__buttonForm"
            disabled={isLoginLoading}
          >
            Siguiente
          </button>
        </form>
      </div>
    </>
  );
};
