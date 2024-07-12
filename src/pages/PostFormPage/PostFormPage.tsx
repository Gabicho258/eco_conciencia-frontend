import React, { useEffect } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import "./_PostFormPage.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

export const PostFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const params = useParams();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    try {
      const res = {
        title: values.title,
        description: values.description,
        photos_url: values.image[0],
      };
      if (params.id) {
        /* updatepost */
      } else {
        /* createpost */
      }

      navigate("/home");
    } catch (error) {
      console.log("Error con el postMessage", error);
    }
  });

  useEffect(() => {
    async function loadPost() {
      if (params.id) {
        /* llamada a la base de datos, rellenar los campos */
      }
    }

    loadPost();
  }, []);

  return (
    <>
      <NavBar />
      <div className="containerCreatePost">
        {params.id ? (
          <h2 className="containerCreatePost__header">Editar publicación</h2>
        ) : (
          <h2 className="containerCreatePost__header">Crear publicación</h2>
        )}

        <form onSubmit={onSubmit} className="containerCreatePost__form">
          <div className="containerCreatePost__form-inputs">
            <input
              type="text"
              placeholder="Título"
              className="containerCreatePost__form-inputs-title"
              {...register("title", {required: true})}
            />
            {errors.title && <p className="containerCreatePost__form-inputs-error">El título es requerido</p>}

            <input type="file" {...register("image")} />

            <textarea
              placeholder="Descripción de la Publicación"
              autoComplete="off"
              className="containerCreatePost__form-inputs-description"
              {...register("description", { required: true })}
            ></textarea>
            {errors.description && <p className="containerCreatePost__form-inputs-error">La descripción es requerida</p>}
          </div>
          <div className="containerCreatePost__form-bottom">
            <Link
              className="containerCreatePost__form-bottom-buttonCancel"
              to={"/home"}
            >
              Cancelar
            </Link>
            <button
              className="containerCreatePost__form-bottom-buttonCreate"
              type="submit"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
