import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import "./_PostFormPage.scss";

export const PostFormPage = () => {
  return (
    <>
      <NavBar />
      <div className="containerCreatePost">
        <h2 className="containerCreatePost__header">Crear publicación</h2>

        <form action="" className="containerCreatePost__form">
          <div className="containerCreatePost__form-inputs">
            <input
              type="text"
              placeholder="Título"
              className="containerCreatePost__form-inputs-title"
            />
            <input type="file" />
            <textarea
              name=""
              id=""
              placeholder="Descripción de la Publicación"
              className="containerCreatePost__form-inputs-description"
            ></textarea>
          </div>
        </form>
        <div className="containerCreatePost__bottom">
          <button className="containerCreatePost__bottom-buttonCancel">
            Cancelar
          </button>
          <button className="containerCreatePost__bottom-buttonCreate">
            Crear
          </button>
        </div>
      </div>
    </>
  );
};
