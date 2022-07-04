import { CSSProperties } from "react";
import colors from "../../utils/colors";
import { Comment, Avatar, Tooltip } from "antd";

class Style {
    layout: CSSProperties = {
        height: '80vh',
        backgroundColor: colors.gray[6],
    }

    comment: CSSProperties = {
        width: '80%',
        margin: '10px auto',
        backgroundColor: colors.gray[7],
        padding: '5px 10px',
        borderRadius: '10px',
        color: colors.gray[2],
        border: `1px solid ${colors.gray[5]}`
    }

    textcolor: CSSProperties = {
        color: colors.gray[4],
        fontSize: '1.2EM'
    }
}

export interface CommentComponentProps {
    comments: { content: string, title: string }[]
}

const CommentComponent = (props: CommentComponentProps) => {

    const style = new Style

    const render = () => {
        return props.comments.map((comment, index) => {
            return <Comment
                key={`portifolio-comment-${index}`}
                style={style.comment}
                author={<a style={style.textcolor}>Diego Heleno</a>}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Diego Heleno" />}
                content={
                    <p>{comment.content}</p>
                }
                datetime={
                    <span style={style.textcolor} > - {comment.title}</span>
                }
            />
        })
    }

    return <>{render()}</>
}

export default CommentComponent