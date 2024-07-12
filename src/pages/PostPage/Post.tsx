import { NavBar } from "../../components/NavBar/NavBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";

import "./_Post.scss";
import { Avatar } from "@mui/material";

export const Post = () => {
  const navigate = useNavigate();
  const mock = {
    _id: "668f4ebeae52b096d4223200",
    user_id: "668f4c20ae52b096d42231ed",
    title: "Quema de Desechos en Yura",
    description: "String qweqwe",
    photos_url: ["google1.com", "google2.com"],
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
                  Publicado el:{" "}
                  {new Date(mock.createdAt).toLocaleDateString("es-es", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="postContainer__content-author-like">
              LIKE
              <ThumbUpAltIcon />
              <ThumbUpOffAltIcon />
            </div>
          </div>
          <div className="postContainer__content-postInfo">
            <ThumbUpOffAltIcon /> 20
            <CommentIcon /> 89
          </div>
        </div>
      </div>
    </>
  );
};
