import { NavBar } from "../../components/NavBar/NavBar";
import { Button } from "@mui/material";

import "./_HubHome.scss";

export const HubHome = () => {
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
          >
            Descubre nuevas historias
          </Button>
        </div>
        <div className="hubHomeContainer__footer" />
      </div>
    </>
  );
};
