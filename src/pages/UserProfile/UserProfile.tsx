import "./_UserProfile.scss";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetPostsByUserIdQuery,
  useGetUserByIdQuery,
} from "../../app/ecoCiencia.api";

export const UserProfile = () => {
  const { id } = useParams();
  const userDataStorage = localStorage.getItem("user_data");
  const userCredentials =
    userDataStorage?.includes("_id") && JSON.parse(userDataStorage);
  const isOwnProfile = id ? id === userCredentials._id : true;
  const { data: user } = useGetUserByIdQuery(
    isOwnProfile ? userCredentials._id : id
  );
  const { data: myPosts } = useGetPostsByUserIdQuery(user?._id || "");



  const navigate = useNavigate();

  return (
    <>
      <div className='userProfile'>
        <div className='userProfile__addPost'>Añadir publicación</div>
        <div className="userProfile__backBtn">
          <ArrowBackIcon
            className="userProfile__backBtn-icon"
            onClick={() => navigate(-1)}
          />
        </div>
        {isOwnProfile ? (
          <>
            <div
              className="userProfile__editBtn"
              onClick={() => {
                navigate("/edit-profile");
              }}
            >
              <EditIcon className="userProfile__editBtn-icon" />
            </div>
          </>
        ) : (
          <></>
        )}

        <div className="userProfile__container">
          <div className="userProfile__container-grid">
            <div className="userProfile__container-grid-left">
              <Avatar
                className="userProfile__container-grid-left-image"
                alt={user?.name}
                src={user?.photo_url}
              />
              <h3 className="userProfile__container-grid-left-name">
                {user?.name}
              </h3>
            </div>
            <div className="userProfile__container-grid-right">
              <h2 className="userProfile__container-grid-right-label">Posts</h2>
              <h2 className="userProfile__container-grid-right-counter">
                {myPosts?.length}
              </h2>
            </div>
          </div>
        </div>
        <div className="userProfile__postsTab">
          <div className="userProfile__postsTab-posts">
            <ImageList gap={15} cols={5}>
              {myPosts ? (
                myPosts?.map((item) => (
                  <ImageListItem
                    key={item._id}
                    onClick={() => navigate(`/post/${item._id}`)}
                  >
                    <div className="userProfile__postsTab-posts-title">
                      {item.title}
                    </div>
                    <img
                      className="userProfile__postsTab-posts-img"
                      src={item.photos_url[0]}
                      alt={item.title}
                      key={item._id}
                    />
                    <div className="userProfile__postsTab-posts-likes">
                      <ThumbUpIcon /> {item.likes}
                    </div>
                  </ImageListItem>
                ))
              ) : (
                <p>No se realizaron posts</p>
              )}
            </ImageList>
          </div>
        </div>
      </div>
    </>
  );
};
