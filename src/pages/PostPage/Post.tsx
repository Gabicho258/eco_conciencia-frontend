import { NavBar } from "../../components/NavBar/NavBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import { Avatar, Box, Button, FormControl, Tabs } from "@mui/material";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import "./_Post.scss";
import { Comment } from "../../components/Comment/Comment";
import { IComment } from "../../interfaces";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};
export const Post = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [addingComment, setAddingComment] = useState(false);
  const isLoading = false;
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [form, setForm] = useState<Partial<IComment>>({
    comment: "",
  });
  const handleSubmit = async () => {
    // const comment = { ...form, user_id: userCredentials.id, recipe_id: id };
    try {
      // await createComment(comment).unwrap();
      // // actualizamos la calificación de la receta
      // if (comments?.length === 0) {
      //   await updateRecipe({
      //     _id: id,
      //     average_rating: comment.rating,
      //   }).unwrap();
      // } else {
      //   await updateRecipe({
      //     _id: id,
      //     average_rating:
      //       ((comment.rating || 0) + (recipe?.average_rating || 0)) / 2,
      //   }).unwrap();
      // }
      // // refetchComment
      // setAddingComment(false);
      // refetchComment();
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };
  const mock = {
    _id: "668f4ebeae52b096d4223200",
    user_id: "668f4c20ae52b096d42231ed",
    title: "Quema de Desechos en Yura",
    description:
      "El último fin de semana hubo un accidente en la avenida Progreso cerca de la planta de procesamiento de cementos y demas descripcion y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes, y demas cosas importantes,",
    photos_url: [
      "https://www.bbva.com/wp-content/uploads/2021/07/BBVA-contaminacio%CC%81n-ambiental-sostenibilidad.jpg",
      "https://losenlacesdelavida.fundaciondescubre.es/files/2019/09/contaminacion-ambiental.jpg",
    ],
    labels: ["Label1", "Label2"],
    district: "My district",
    likes: 12,
    createdAt: "2024-07-11T03:17:18.550Z",
    updatedAt: "2024-07-11T03:17:18.550Z",
  };
  const autor = {
    name: "My name",
    photo_url:
      "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg",
    _id: "668f4c20ae52b096d42231ed",
    email: "myemail@gmail.com",
    password: "mypassword",
  };

  const commentsPost = [
    {
      post_id: "668f4f20ae52b096d4223206",
      user_id: "668f4c5fae52b096d42231f3",
      comment: "comment aeaeae",
      createdAt: "2024-07-11T03:24:15.654Z",
      updatedAt: "2024-07-11T03:24:15.654Z",
    },
    {
      post_id: "668f4f20ae52b096d4223206",
      user_id: "668f4c5fae52b096d42231f3",
      comment: "comment aeaeae",
      createdAt: "2024-07-11T03:24:15.654Z",
      updatedAt: "2024-07-11T03:24:15.654Z",
    },
    {
      post_id: "668f4f20ae52b096d4223206",
      user_id: "668f4c5fae52b096d42231f3",
      comment: "comment aeaeae",
      createdAt: "2024-07-11T03:24:15.654Z",
      updatedAt: "2024-07-11T03:24:15.654Z",
    },
    {
      post_id: "668f4f20ae52b096d4223206",
      user_id: "668f4c5fae52b096d42231f3",
      comment: "comment aeaeae",
      createdAt: "2024-07-11T03:24:15.654Z",
      updatedAt: "2024-07-11T03:24:15.654Z",
    },
  ];
  //   const handleLike = async () => {
  //     const isFavorite = user?.favorites.includes(id || "");
  //     try {
  //       if (isFavorite) {
  //         // si es favorito, lo quitamos
  //         await updateUser({
  //           _id: userCredentials.id,
  //           favorites: user?.favorites.filter(
  //             (favorite) => favorite !== recipe?._id
  //           ),
  //         }).unwrap();
  //       } else {
  //         // sino lo agregamos
  //         await updateUser({
  //           _id: userCredentials.id,
  //           favorites: [...(user?.favorites || []), recipe?._id || ""],
  //         }).unwrap();
  //       }
  //     } catch (error: any) {
  //       alert(JSON.stringify(error.data));
  //     }
  //     // console.log(isFavorite);
  //   };

  return (
    <>
      <NavBar />

      <div className="postContainer">
        <div className="postContainer__back" onClick={() => navigate(-1)}>
          <ArrowBackIcon className="postContainer__back-icon" />
          <div className="postContainer__back-text">Volver</div>
        </div>
        <div className="postContainer__content">
          <h3 className="postContainer__content-title">{mock.title}</h3>
          <div className="postContainer__content-author">
            <div className="postContainer__content-author-info">
              <Avatar
                className="postContainer__content-author-info-avatar"
                alt={autor?.name}
                src={autor?.photo_url}
              />
              <div className="postContainer__content-author-info-data">
                <p>{autor.name}</p>
                <p>
                  Publicado el:{"    "}
                  {new Date(mock.createdAt).toLocaleDateString("es-es", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="postContainer__content-author-like">
              LIKE {/*codicional si dio like o no*/}
              <ThumbUpAltIcon className="postContainer__content-author-like-icon" />
              <ThumbUpOffAltIcon className="postContainer__content-author-like-icon" />
            </div>
          </div>
          <div className="postContainer__content-postInfo">
            <span>
              <ThumbUpOffAltIcon /> {mock.likes}
            </span>
            <span>
              <CommentIcon /> {commentsPost.length}
            </span>
          </div>
          <div className="postContainer__content-images">
            <Box sx={{ width: "100%" }}>
              {mock?.photos_url.map((photo_url, index) => (
                <CustomTabPanel value={value} index={index} key={index}>
                  <img
                    className="postContainer__content-images-image"
                    src={photo_url}
                    alt={`Post photo ${index}`}
                    key={index}
                  />
                </CustomTabPanel>
              ))}

              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  className="postContainer__content-images-tabs"
                  variant="scrollable"
                  scrollButtons="auto"
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  {mock?.photos_url.map((photo_url, index) => (
                    <Tab
                      className="postContainer__content-images-tabs-tab"
                      icon={
                        <img
                          className="postContainer__content-images-tabs-tab-image"
                          src={photo_url}
                          alt={`Post photo ${index}`}
                        />
                      }
                      {...a11yProps(index)}
                      key={index}
                    />
                  ))}
                </Tabs>
              </Box>
            </Box>
          </div>
          <div className="postContainer__content-description">
            {mock.description}
          </div>
          <div className="postContainer__content-comments">
            <div className="postContainer__content-comments-header">
              <h4 className="postContainer__content-comments-header-title">
                Comentarios
              </h4>
              <Button
                // className="recipe__comments-header-addCommentBtn"
                className="postContainer__content-comments-header-button"
                variant="contained"
                onClick={() => {
                  setAddingComment(true);
                }}
                disabled={commentsPost?.some(
                  (comment) => comment.user_id === "userCredentials.id"
                  // (comment) => comment.user_id === "668f4c5fae52b096d42231f3"
                )}
              >
                {/* <AddIcon className="recipe__comments-header-addCommentBtn-icon" /> */}
                <AddIcon className="postContainer__content-comments-header-button-icon" />
                Añadir comentario
              </Button>
            </div>
            {addingComment && (
              // <FormControl className="recipe__comments-newComment">
              <FormControl className="postContainer__content-comments-newComment">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // handleSubmit(e);
                  }}
                >
                  <Box className="postContainer__content-comments-newComment-container">
                    <textarea
                      className="postContainer__content-comments-newComment-container-comment"
                      required
                      placeholder="Escribe un comentario..."
                      rows={4}
                      value={form.comment}
                      onChange={({ target }) => {
                        setForm({
                          ...form,
                          comment: target.value,
                        });
                      }}
                    ></textarea>
                    <div className="postContainer__content-comments-newComment-container-btnSection">
                      <Button
                        type="submit"
                        color="success"
                        variant="contained"
                        className="postContainer__content-comments-newComment-container-btnSection-submit"
                        onClick={handleSubmit}
                        disabled={form.comment?.length === 0 || isLoading}
                      >
                        Guardar cambios
                      </Button>
                      <Button
                        type="button"
                        variant="contained"
                        className="postContainer__content-comments-newComment-container-btnSection-cancel"
                        disabled={isLoading}
                        onClick={() => {
                          setAddingComment(false);
                          form.comment = "";
                        }}
                      >
                        Cancelar
                      </Button>
                    </div>
                  </Box>
                </form>
              </FormControl>
            )}
            {commentsPost.map((comment, index) => (
              <Comment comment={comment} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
