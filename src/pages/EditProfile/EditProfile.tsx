import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import "./_EditProfile.scss";
import { useNavigate } from "react-router-dom";
import { useGetUserByIdQuery } from "../../app/ecoCiencia.api";

export const EditProfile = () => {

  const userDataStorage = localStorage.getItem("user_data");
  const userCredentials =
    userDataStorage?.includes("_id") && JSON.parse(userDataStorage);
  const { data: user } = useGetUserByIdQuery(userCredentials?._id);
  // const user: IUser = {
  //   _id: '123456789',
  //   name: 'Juan Pérez',
  //   email: 'juan.perez@example.com',
  //   password: 'segura1234',
  //   photo_url:
  //     'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  // };

  const navigate = useNavigate();

  return (
    <>
      <div className="editProfile">
        <div className="editProfile__buttons">
          <Button
            variant="contained"
            className="editProfile__buttons-cancel"
            onClick={() => navigate(-1)}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            className="editProfile__buttons-save"
            onClick={() => {}}
          >
            Guardar
          </Button>
        </div>
        <div className="editProfile__main">
          <div className="editProfile__main-userImage">
            <Avatar
              className="editProfile__main-userImage-image"
              alt={user?.name}
              src={user?.photo_url}
            />
            <Button
              variant="text"
              className="editProfile__main-userImage-editImageBtn"
            >
              <AddIcon className="editProfile__main-userImage-editImageBtn-icon" />
              <div
                className="editProfile__main-userImage-editImageBtn-label"
                onClick={() => {}}
              >
                Editar foto
              </div>
            </Button>
          </div>
          <Divider className="editProfile__main-divider" />
          <div className="editProfile__main-editForm">
            <div className="editProfile__main-editForm-grid">
              <div className="editProfile__main-editForm-grid-left">
                <div className="editProfile__main-editForm-grid-left-field">
                  <p className="editProfile__main-editForm-grid-left-field-label">
                    Correo:
                  </p>
                  <TextField
                    className="editProfile__main-editForm-grid-left-field-input-disabled"
                    disabled
                    id="outlined-disabled"
                    value={user?.email}
                    sx={{
                      "& .MuiInputBase-root.Mui-disabled": {
                        "& > fieldset": {
                          opacity: 0,
                        },
                      },
                    }}
                  />
                </div>
                <div className="editProfile__main-editForm-grid-left-field">
                  <p className="editProfile__main-editForm-grid-left-field-label">
                    Nombre:
                  </p>
                  <div className="editProfile__main-editForm-grid-left-field-inputContainer">
                    <input
                      defaultValue={user?.name}
                      type="text"
                      className="editProfile__main-editForm-grid-left-field-inputContainer-input"
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </div>
              <div className="editProfile__main-editForm-grid-right">
                {/* <div className="editProfile__main-editForm-grid-right-field">
                  <p className="editProfile__main-editForm-grid-right-label">
                    Nueva contraseña
                  </p>
                  <div className="editProfile__main-editForm-grid-right-field-inputContainer">
                    <input
                      type="password"
                      className="editProfile__main-editForm-grid-right-field-inputContainer-input"
                      onChange={({ target }) => {
                        onInputChange(target.value, "password");
                      }}
                    />
                  </div>
                </div>
                <div className="editProfile__main-editForm-grid-right-field">
                  <p className="editProfile__main-editForm-grid-right-label">
                    Confirmar contraseña
                  </p>
                  <div className="editProfile__main-editForm-grid-right-field-inputContainer">
                    <input
                      type="password"
                      className="editProfile__main-editForm-grid-right-field-inputContainer-input"
                      onChange={({ target }) => {
                        setVerifyPassword(target.value);
                      }}
                    />
                  </div>
                </div>
                {error ? (
                  <div className="editProfile__main-editForm-grid-right-passwordErr">
                    {error}
                  </div>
                ) : (
                  <></>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
