import "./_Comment.scss";
import { Avatar } from "@mui/material";
import { IComment } from "../../interfaces";
import {
  useGetPostByIdQuery,
  useGetUserByIdQuery,
} from "../../app/ecoCiencia.api";
import { useParams } from "react-router-dom";
interface CommentProps {
  comment: Partial<IComment>;
}
export const Comment = ({ comment }: CommentProps) => {
  const { id } = useParams();
  const { data: commentOwner } = useGetUserByIdQuery(comment?.user_id || "");
  const { data: post } = useGetPostByIdQuery(id || "");
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
          {commentOwner?._id === post?.user_id && <span>Publicador</span>}
        </h4>
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
