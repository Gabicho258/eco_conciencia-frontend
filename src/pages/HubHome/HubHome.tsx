import { useState } from "react";
import Register from "../Register/Register";
import BasicModal from "../../components/modal/BasicModal";
import { NavBar } from "../../components/NavBar/NavBar";
import { Button } from "@mui/material";

import "./_HubHome.scss";

export const HubHome = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const handleOpen = (content: React.ReactNode) => {
    setModalContent(content);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <NavBar />
      <div className="hubHomeContainer">
        <div className="hubHomeContainer__content">
          <h2 className="hubHomeContainer__content-title">
            Comparte tus historias ambientales con los demás
          </h2>
          <h4 className="hubHomeContainer__content-subtitle">
            Un lugar para escribir, compartir y comentar tus historias con los
            demás te espera, comparte con otros tus propias experiencias sobre
            el medio ambiente.
          </h4>
          <Button
            variant={"contained"}
            className="hubHomeContainer__content-button"
            onClick={() => handleOpen(<Register />)}
          >
            Descubre nuevas historias
          </Button>
          <BasicModal
            open={open}
            handleClose={handleClose}
            content={modalContent}
          />
        </div>
        <div className="hubHomeContainer__footer" />
      </div>
    </>
  );
};
