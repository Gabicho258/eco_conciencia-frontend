import { useNavigate } from "react-router-dom";
import { useGetUserByIdQuery } from "../../app/ecoCiencia.api";
import { IPost } from "../../interfaces";
import "./_PostCard.scss";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { format } from "date-fns";

interface PostProps {
  post: IPost;
}

const PostCard: React.FC<PostProps> = ({ post }) => {
  const formattedDate = format(new Date(post.createdAt), "dd MMM");
  const { data: user } = useGetUserByIdQuery(post.user_id || "");
  const navigate = useNavigate();
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

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
          <p>{truncateText(post.title, 120)}</p>
        </div>
        <div className="postCard__content-bottom">
          <p>{user?.name}</p>
          <p className="postCard__content-bottom-likes">
            <ThumbUpOffAltIcon />
            {post.likes}
          </p>
          <p>{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
