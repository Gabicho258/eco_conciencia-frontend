import { useEffect, useState, ChangeEvent } from "react";
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
import { CloudDone } from "@mui/icons-material";
import { categories, districts } from "../../utils/constants";

export const PostFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const params = useParams();
  const navigate = useNavigate();

  const [district, setDistrict] = useState("");
  const [photosUrl, setPhotosUrl] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    setDistrict(event.target.value);
  };

  /* post de prueba */
  const post = {
    title: "string",
    description: "description",
    photos_url: ["photo1", "photo2"],
    labels: ["Categoría 1", "cat2"],
    district: "Cayma",
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      const res = {
        /* falta el id del usuario */
        title: values.title,
        description: values.description,
        photos_url: photosUrl,
        labels: selectedCategories,
        district: district
      };
      if (params.id) {
        /* updatepost */
      } else {
        /* createpost */
        /* const createdPost = await createPost(res) */
        /* console.log(createdPost) */
      }

      navigate("/home");
    } catch (error) {
      console.log("Error con el postMessage", error);
    }
  });

  useEffect(() => {
    async function loadPost() {
      if (params.id) {
        /* llamada a la base de datos, reemplazar post por el post obtenido de la llamada */
        setValue("title", post.title);
        setValue("description", post.description);
        setPhotosUrl(post.photos_url || []);
        setSelectedCategories(post.labels || []);
        console.log(selectedCategories);
        setDistrict(post.district);
      }
    }

    loadPost();
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newPhotos = files.map((file) => URL.createObjectURL(file));

    setPhotosUrl((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  const handleDeleteImage = (url: string) => {
    setPhotosUrl((prevPhotosUrl) =>
      prevPhotosUrl.filter((photoUrl) => photoUrl !== url)
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prevSelectedCategories =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter(cat => cat !== category)
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
                  <div className="containerCreatePost__form-inputs-images-urls-url">
                    <a
                      href={url}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Imagen {index + 1}
                    </a>
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

            <input
              type="file"
              className="containerCreatePost__form-inputs-image"
              multiple
              onChange={handleFileChange}
            />

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
              {categories.map((category) => (
                <FormControlLabel
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
                {districts.map((district) => (
                  <MenuItem value={district}>{district}</MenuItem>
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
