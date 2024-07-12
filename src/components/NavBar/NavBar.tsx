import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Register from "../../pages/Register/Register";
import BasicModal from "../modal/BasicModal";
// import { useGetUserByIdQuery } from "../../app/apis/compartiendoSabores.api";

import "./_NavBar.scss";
import image from "../../assets/icon_zoom.png";
import { Login } from "../../pages/Login/Login";

export const NavBar = () => {
  ///// Start modal content /////////////////////////

  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const handleOpenModal = (content: React.ReactNode) => {
    setModalContent(content);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);
  ///////////////// End modal content////////////////

  //   const isUserAuthenticated = localStorage.getItem("data");
  const isUserAuthenticated = false;
  //   const userCredentials =
  //     isUserAuthenticated && JSON.parse(isUserAuthenticated);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickEditProfile = () => {
    navigate("/edit-profile");
  };
  const handleClickProfile = () => {
    navigate("/profile");
  };
  const handleClickLogout = () => {
    localStorage.clear();
    navigate("/homepage");
  };
  // console.log(isUserAuthenticated);
  //   const { data } = useGetUserByIdQuery(userCredentials?.id);
  const data = {
    first_name: "qwerty",
    last_name: "asdfg",
    photo_url:
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y",
  };

  return (
    <>
      <div className="navBarContainer">
        <div className="navBarContainer__header">
          <img
            className="navBarContainer__header-icon"
            alt="image_profile"
            src={image}
            onClick={() => {
              navigate("/homepage");
            }}
          ></img>
          <h1 className="navBarContainer__header-text">EcoConciencia</h1>
        </div>
        {isUserAuthenticated ? (
          <>
            <div className="navBarContainer__profile">
              <div className="navBarContainer__profile-name">
                {data?.first_name} {data?.last_name}
              </div>
              <Avatar
                className="navBarContainer__profile-image"
                alt={data?.first_name}
                src={data?.photo_url}
                onClick={handleClick}
              />
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleClickProfile();
                  }}
                >
                  <Avatar src={data?.photo_url} /> {data?.first_name}
                </MenuItem>
                <Divider />
                {/* <MenuItem
                  onClick={() => {
                    navigate("/chat");
                  }}
                >
                  <ListItemIcon>
                    <ChatIcon fontSize="small" />
                  </ListItemIcon>
                  Chats
                </MenuItem> */}

                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleClickEditProfile();
                  }}
                >
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Editar perfil
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleClickLogout();
                  }}
                >
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Salir
                </MenuItem>
              </Menu>
            </div>
          </>
        ) : (
          <>
            <div className="navBarContainer__buttons">
              <Button
                className="navBarContainer__buttons-register"
                variant="contained"
                onClick={() => {
                  handleOpenModal(<Register />);
                }}
              >
                Regístrate
              </Button>
              <Button
                className="navBarContainer__buttons-login"
                variant="contained"
                onClick={() => {
                  handleOpenModal(<Login />);
                }}
              >
                Ingresar
              </Button>
            </div>
            <BasicModal
              open={openModal}
              handleClose={handleCloseModal}
              content={modalContent}
            />
          </>
        )}
      </div>
    </>
  );
};
