import { NavBar } from "../../components/NavBar/NavBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
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
import {
  useCreateCommentMutation,
  useDeletePostMutation,
  useGetCommentsByPostIdQuery,
  useGetPostByIdQuery,
  useGetUserByIdQuery,
  useUpdatePostMutation,
  useUpdateUserMutation,
} from "../../app/ecoCiencia.api";
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
  const { id } = useParams();
  const userDataStorage = localStorage.getItem("user_data");
  const userCredentials =
    userDataStorage?.includes("_id") && JSON.parse(userDataStorage);
  const { data: user, refetch: refetchUser } = useGetUserByIdQuery(
    userCredentials._id || ""
  );
  const { data: post, refetch: refetchPost } = useGetPostByIdQuery(id || "");
  const { data: commentsPost, refetch: refetchComment } =
    useGetCommentsByPostIdQuery(post?._id || "");
  const { data: author } = useGetUserByIdQuery(post?.user_id || "");
  const [updatePost] = useUpdatePostMutation();
  const [createComment] = useCreateCommentMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deletePost] = useDeletePostMutation();
  const handleSubmit = async () => {
    const comment = { ...form, user_id: userCredentials._id, post_id: id };
    try {
      await createComment(comment).unwrap();

      // // refetchComment
      setAddingComment(false);
      refetchComment();
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };
  const handleDelete = async () => {
    try {
      await deletePost(post?._id || "").unwrap();
      navigate(-1);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };
  const handleLike = async () => {
    const isLiked = user?.likes.includes(id || "");
    try {
      if (isLiked) {
        // si es favorito, lo quitamos
        await updateUser({
          _id: userCredentials._id,
          likes: user?.likes.filter((postLiked) => postLiked !== post?._id),
        }).unwrap();
        await updatePost({ _id: id, likes: (post?.likes || 0) - 1 }).unwrap();
      } else {
        // sino lo agregamos
        await updateUser({
          _id: userCredentials._id,
          likes: [...(user?.likes || []), post?._id || ""],
        }).unwrap();
        await updatePost({ _id: id, likes: (post?.likes || 0) + 1 }).unwrap();
      }

      await refetchPost();
      await refetchUser();
    } catch (error) {
      alert(JSON.stringify(error));
    }
    // console.log(isLiked);
  };

  return (
    <>
      <NavBar />

      <div className="postContainer">
        <div className="postContainer__back" onClick={() => navigate(-1)}>
          <ArrowBackIcon className="postContainer__back-icon" />
          <div className="postContainer__back-text">Volver</div>
        </div>
        <div className="postContainer__content">
          {post?.user_id === user?._id ? (
            <div className="postContainer__content-container">
              <h3 className="postContainer__content-title">{post?.title}</h3>
              <div>
                <Button
                  className="postContainer__content-container-btn-edit"
                  variant="contained"
                  onClick={() => {
                    navigate(`/edit-post/${post?._id}`);
                  }}
                >
                  Editar
                </Button>
                <Button
                  className="postContainer__content-container-btn-delete"
                  variant="contained"
                  onClick={handleDelete}
                >
                  Eliminar
                </Button>
              </div>
            </div>
          ) : (
            <h3 className="postContainer__content-title">{post?.title}</h3>
          )}

          <div className="postContainer__content-author">
            <div className="postContainer__content-author-info">
              <Avatar
                className="postContainer__content-author-info-avatar"
                alt={author?.name}
                src={author?.photo_url}
              />
              <div className="postContainer__content-author-info-data">
                <p>{author?.name}</p>
                <p>
                  Publicado el:{"    "}
                  {"" +
                    new Date(post?.createdAt || "").toLocaleDateString(
                      "es-es",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }
                    )}
                </p>
              </div>
            </div>
            <div className="postContainer__content-author-like">
              {/* LIKE codicional si dio like o no */}
              {user?.likes.includes(id || "") ? (
                <div className="postContainer__content-author-like-container">
                  Me gusta{" "}
                  {/* <FavoriteIcon className="recipe__container-favBtn-icon" /> */}
                  <ThumbUpAltIcon
                    onClick={handleLike}
                    className="postContainer__content-author-like-icon"
                  />
                </div>
              ) : (
                <div className="postContainer__content-author-like-container">
                  Dar me gusta{" "}
                  {/* <FavoriteBorderIcon className="recipe__container-favBtn-icon" /> */}
                  <ThumbUpOffAltIcon
                    onClick={handleLike}
                    className="postContainer__content-author-like-icon"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="postContainer__content-postInfo">
            <span>
              <ThumbUpOffAltIcon /> {post?.likes}
            </span>
            <span>
              <CommentIcon /> {commentsPost?.length}
            </span>
          </div>
          <div className="postContainer__content-images">
            <Box sx={{ width: "100%" }}>
              {post?.photos_url.map((photo_url, index) => (
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
                  {post?.photos_url.map((photo_url, index) => (
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
            {post?.description}
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
                // disabled={commentsPost?.some(
                //   (comment) => comment.user_id === "userCredentials.id"
                //   // (comment) => comment.user_id === "668f4c5fae52b096d42231f3"
                // )}
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
            {commentsPost?.map((comment, index) => (
              <Comment comment={comment} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
