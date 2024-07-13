import { useNavigate } from "react-router-dom";
import { useGetUserByIdQuery } from "../../app/ecoCiencia.api";
import { IPost } from "../../interfaces";
import "./_PostCard.scss";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

interface PostProps {
  post: IPost;
}

const PostCard: React.FC<PostProps> = ({ post }) => {
  // descomentar las lineas de fecha cuando se va a trabajar con datos del backend
  //const formattedDate = format(new Date(post.createdAt), 'dd MMM');
  const { data: user } = useGetUserByIdQuery(post.user_id || "");
  const navigate = useNavigate();
  return (
    <div className="postCard">
      <div
        className="postCard__content"
        onClick={() => navigate(`/post/${post?._id}`)}
      >
        <div className="postCard__content-top">
          <img
            src={post.photos_url[0]}
            alt="Post image"
            className="postCard__content-top-image"
          />
          <p>{post.title}</p>
        </div>
        <div className="postCard__content-bottom">
          <p>{user?.name}</p>
          {/* momentaneo, se tiene que buscar el usuario con ese id */}
          <p className="postCard__content-bottom-likes">
            <ThumbUpOffAltIcon />
            {post.likes}
          </p>
          {/* <p>{formattedDate}</p> */}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
