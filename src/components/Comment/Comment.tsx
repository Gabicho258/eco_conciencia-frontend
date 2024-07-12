import "./_Comment.scss";
import { Avatar } from "@mui/material";
import { IComment } from "../../interfaces";
interface CommentProps {
  comment: Partial<IComment>;
}
export const Comment = ({ comment }: CommentProps) => {
  const commentOwner = {
    name: "My comentes",
    photo_url:
      "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg",
    _id: "668f4c20ae52b096d42231ed",
    email: "myemail@gmail.com",
    password: "mypassword",
  };
  return (
    <div className="comment">
      <div className="comment__header">
        <Avatar
          className="navBarContainer__profile-image"
          alt={commentOwner?.name}
          src={commentOwner?.photo_url}
        />
        <h4 className="comment__header-author" onClick={() => {}}>
          {commentOwner?.name}
        </h4>
        {/* <RatingStars readOnly darkTheme qualification={rating} /> */}
      </div>
      <p className="comment__commentContent-date">
        {new Date(comment.createdAt || "").toLocaleDateString("es-es", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
      <p className="comment__commentContent-text">{comment?.comment}</p>
      <hr />
    </div>
  );
};
