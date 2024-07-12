import { IPost } from "../../interfaces";
import "./_PostCard.scss";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { format } from 'date-fns';

interface PostProps {
  post: IPost;
}

const PostCard: React.FC<PostProps> = ({ post }) => {
  // descomentar las lineas de fecha cuando se va a trabajar con datos del backend
  //const formattedDate = format(new Date(post.createdAt), 'dd MMM');

  return (
    <div className="postCard">
      <div className="postCard__content">
        <div className="postCard__content-top">
          <img src={post.photos_url[0]} alt="Post image" className="postCard__content-top-image"/>
          <p>{post.title}</p>
        </div>
        <div className="postCard__content-bottom">
          <p>{post.user_id}</p>{/* momentaneo, se tiene que buscar el usuario con ese id */}
          <p className="postCard__content-bottom-likes"><ThumbUpOffAltIcon />{post.likes}</p>
          {/* <p>{formattedDate}</p> */}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
