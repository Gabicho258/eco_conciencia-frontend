import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import "./_EditProfile.scss";
import { useNavigate } from "react-router-dom";
import {
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from "../../app/ecoCiencia.api";
import { useEffect, useState } from "react";
import { cloudinaryService } from "../../services/cloudinaryService";
import { IUser } from "../../interfaces";

export const EditProfile = () => {
  const userDataStorage = localStorage.getItem("user_data");
  const userCredentials =
    userDataStorage?.includes("_id") && JSON.parse(userDataStorage);
  const { data: user, isLoading } = useGetUserByIdQuery(userCredentials?._id);
  const [updateUser] = useUpdateUserMutation();
  const [name, setName] = useState<string>(user?.name || "");
  const [userPhoto, setPhoto] = useState<string>(user?.photo_url || "");
  const navigate = useNavigate();
  // Conexion with cloudinary service
  const showWidgetPhotoUser = async () => {
    let state = "";
    let URL = "";
    // hacemos un casteo para evitar errores
    (window as any).cloudinary.openUploadWidget(
      cloudinaryService("eco_conciencia"),
      (err: any, result: any) => {
        if (!err && result && result.event === "success") {
          state = "success";
          const { secure_url /*, original_filename, format */ } = result.info;
          URL = secure_url;
        }
        if (state === "success" && result.event === "close") {
          // handlePhotoEdit(URL);
          // console.log(result);
          setPhoto(URL);
          // onInputChange(URL, "photo_url");
        }
      }
    );
  };

  const handleUpdateUser = async () => {
    console.log(name);
    const userToUpdate: Partial<IUser> = {
      _id: user?._id,
      name: name,
      photo_url: userPhoto,
    };
    try {
      await updateUser(userToUpdate).unwrap();
      navigate(-1);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };
  useEffect(() => {
    setName(user?.name || "");
    setPhoto(user?.photo_url || "");
  }, [isLoading]);

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
            onClick={handleUpdateUser}
          >
            Guardar
          </Button>
        </div>
        <div className="editProfile__main">
          <div className="editProfile__main-userImage">
            <Avatar
              className="editProfile__main-userImage-image"
              alt={user?.name}
              src={userPhoto}
            />
            <Button
              variant="text"
              className="editProfile__main-userImage-editImageBtn"
            >
              <AddIcon className="editProfile__main-userImage-editImageBtn-icon" />
              <div
                className="editProfile__main-userImage-editImageBtn-label"
                onClick={showWidgetPhotoUser}
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
                      value={name}
                      type="text"
                      className="editProfile__main-editForm-grid-left-field-inputContainer-input"
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setName(event.target.value);
                      }}
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
