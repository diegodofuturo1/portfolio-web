import { CSSProperties } from "react";
import colors from "../../utils/colors";
import { Comment, Avatar, Tooltip, Row } from "antd";
import { ThemeColor } from "../../store/reducers/theme.reducer";
import { Dispatcher } from "../../store/dispathers";
import { useDispatch, useSelector } from "react-redux";

class Style {
  constructor(private readonly color: ThemeColor = "gray") {}

  layout: CSSProperties = {
    height: "80vh",
    backgroundColor: colors[this.color][6],
  };

  comment: CSSProperties = {
    width: "80%",
    margin: "10px auto",
    backgroundColor: colors[this.color][7],
    padding: "5px 10px",
    color: colors[this.color][2],
    border: `1px solid ${colors[this.color][6]}`,
    borderLeft: `12px solid ${colors[this.color][5]}`,
  };

  textcolor: CSSProperties = {
    color: colors[this.color][4],
    fontSize: "1.2EM",
  };
}

export interface CommentComponentProps {
  comments: { content: string; title: string }[];
}

const CommentComponent = (props: CommentComponentProps) => {
  const { color } = useSelector((state: any) => state.theme);

  const style = new Style(color);

  const render = () => {
    return props.comments.map((comment, index) => {
      return (
        <Comment
          key={`portfolio-comment-${index}`}
          style={style.comment}
          author={<a style={style.textcolor}>Diego Heleno</a>}
          avatar={
            <Avatar
              src="https://diegoheleno.s3.us-east-2.amazonaws.com/public/diego-heleno.jpg"
              alt="Diego Heleno"
            />
          }
          content={<Row>{comment.content}</Row>}
          datetime={<span style={style.textcolor}> - {comment.title}</span>}
        />
      );
    });
  };

  return <>{render()}</>;
};

export default CommentComponent;
