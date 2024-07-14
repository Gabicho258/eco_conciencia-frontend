import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import "./_PostFormPage.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ClearIcon from "@mui/icons-material/Clear";
import { categories, districts } from "../../utils/constants";
import { Button } from "@mui/material";
import { cloudinaryService } from "../../services/cloudinaryService";
import {
  useCreatePostMutation,
  useGetPostByIdQuery,
  useUpdatePostMutation,
} from "../../app/ecoCiencia.api";

export const PostFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const params = useParams();
  const { data: post, isLoading } = useGetPostByIdQuery(params.id || "");

  const navigate = useNavigate();
  const userDataStorage = localStorage.getItem("user_data");
  const userCredentials =
    userDataStorage?.includes("_id") && JSON.parse(userDataStorage);
  const [district, setDistrict] = useState("");
  const [photosUrl, setPhotosUrl] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [createPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const handleChange = (event: SelectChangeEvent) => {
    setDistrict(event.target.value);
  };
  // Conexion with cloudinary service
  const showWidgetPhotoPost = async () => {
    let state = "";
    let URL = "";
    // hacemos un casteo para evitar errores
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).cloudinary.openUploadWidget(
      cloudinaryService("eco_conciencia"),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (err: any, result: any) => {
        if (!err && result && result.event === "success") {
          state = "success";
          const { secure_url /*, original_filename, format */ } = result.info;
          URL = secure_url;
        }
        if (state === "success" && result.event === "close") {
          handleAddImage(URL);
        }
      }
    );
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      const postToHandle = {
        /* falta el id del usuario */
        user_id: userCredentials._id,
        title: values.title,
        description: values.description,
        photos_url: photosUrl,
        labels: selectedCategories,
        district: district,
      };
      if (params.id) {
        await updatePost({ _id: params.id, ...postToHandle }).unwrap();
        navigate("/home", { replace: true });
      } else {
        await createPost(postToHandle).unwrap();
        navigate("/home");
      }
      console.log(postToHandle);
    } catch (error) {
      console.log("Error con el postMessage", error);
    }
  });

  useEffect(() => {
    async function loadPost() {
      if (params.id) {
        setValue("title", post?.title);
        setValue("description", post?.description);
        setPhotosUrl(post?.photos_url || []);
        setSelectedCategories(post?.labels || []);
        console.log(selectedCategories);
        setDistrict(post?.district || "");
      }
    }

    loadPost();
  }, [isLoading]);

  const handleAddImage = (url: string) => {
    setPhotosUrl((prevPhotos) => [...prevPhotos, url]);
  };

  const handleDeleteImage = (url: string) => {
    setPhotosUrl((prevPhotosUrl) =>
      prevPhotosUrl.filter((photoUrl) => photoUrl !== url)
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((cat) => cat !== category)
        : [...prevSelectedCategories, category]
    );
  };

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
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="containerCreatePost__form-inputs-error">
                El título es requerido
              </p>
            )}

            <div className="containerCreatePost__form-inputs-images">
              <h4>Imágenes de mi post:</h4>
              <div className="containerCreatePost__form-inputs-images-urls">
                {photosUrl.map((url, index) => (
                  <div
                    className="containerCreatePost__form-inputs-images-urls-url"
                    key={index}
                  >
                    <img
                      className="containerCreatePost__form-inputs-images-urls-url-image"
                      src={url}
                      alt={`Image ${index}`}
                    />
                    <button
                      className="containerCreatePost__form-inputs-images-urls-url-button"
                      type="button"
                      onClick={() => handleDeleteImage(url)}
                    >
                      <ClearIcon />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="contained"
              className="containerCreatePost__form-inputs-image"
              onClick={showWidgetPhotoPost}
            >
              Subir imagen
            </Button>

            <textarea
              placeholder="Descripción de la Publicación"
              autoComplete="off"
              className="containerCreatePost__form-inputs-description"
              {...register("description", { required: true })}
            ></textarea>
            {errors.description && (
              <p className="containerCreatePost__form-inputs-error">
                La descripción es requerida
              </p>
            )}

            <FormGroup
              className="containerCreatePost__form-inputs-categories"
              {...register("categories")}
            >
              <p className="containerCreatePost__form-inputs-categories-header">
                Seleccione las categorías a la que pertenece su publicación:
              </p>
              {categories.slice(1).map((category, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                  }
                  label={category}
                  className="containerCreatePost__form-inputs-categories-body"
                />
              ))}
            </FormGroup>

            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              size="small"
              className="containerCreatePost__form-inputs-district"
              {...register("district")}
            >
              <InputLabel id="demo-select-small-label">Distrito</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={district}
                label="District"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {districts.map((district, index) => (
                  <MenuItem value={district} key={index}>
                    {district}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="containerCreatePost__form-bottom">
            <Link
              className="containerCreatePost__form-bottom-buttonCancel"
              to={"/home"}
            >
              Cancelar
            </Link>
            <button
              className={`containerCreatePost__form-bottom-buttonCreate containerCreatePost__form-bottom-${
                params.id ? "edit" : "create"
              } `}
              type="submit"
            >
              {params.id ? "Guardar cambios" : "Crear"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
