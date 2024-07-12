import { NavBar } from "../../components/NavBar/NavBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import { Avatar, Box, Tabs } from "@mui/material";
import Tab from "@mui/material/Tab";
import { useState } from "react";

import "./_Post.scss";
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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
    },
    {
      post_id: "668f4f20ae52b096d4223206",
      user_id: "668f4c5fae52b096d42231f3",
      comment: "comment aeaeae",
    },
    {
      post_id: "668f4f20ae52b096d4223206",
      user_id: "668f4c5fae52b096d42231f3",
      comment: "comment aeaeae",
    },
    {
      post_id: "668f4f20ae52b096d4223206",
      user_id: "668f4c5fae52b096d42231f3",
      comment: "comment aeaeae",
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
              LIKE {/*codicional si dio like o no*/}
              <ThumbUpAltIcon />
              <ThumbUpOffAltIcon />
            </div>
          </div>
          <div className="postContainer__content-postInfo">
            <ThumbUpOffAltIcon /> {mock.likes}
            <CommentIcon /> {commentsPost.length}
          </div>
          <div className="postContainer__content-images">
            <Box sx={{ width: "100%" }}>
              {mock?.photos_url.map((photo_url, index) => (
                <CustomTabPanel value={value} index={index}>
                  <img src={photo_url} alt={`Post photo ${index}`} />
                </CustomTabPanel>
              ))}

              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  variant="scrollable"
                  scrollButtons="auto"
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  {mock?.photos_url.map((photo_url, index) => (
                    <Tab
                      icon={<img src={photo_url} alt={`Post photo ${index}`} />}
                      {...a11yProps(index)}
                    />
                  ))}
                </Tabs>
              </Box>
            </Box>
          </div>
          <div className="postContainer__content-description">
            {mock.description}
          </div>
          <div className="postContainer__content-divider" />
          <div className="postContainer__content-comments"></div>
        </div>
      </div>
    </>
  );
};
