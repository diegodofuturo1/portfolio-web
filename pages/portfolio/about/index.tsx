import "antd/dist/antd.css";
import { Image, Layout, Row } from "antd";
import { NextPage } from "next";
import { CSSProperties } from "react";
import colors from "../../../utils/colors";
import about from "../../../utils/texts/about";
import CommentComponent from "../../../components/comment";
import { ThemeColor } from "../../../store/reducers/theme.reducer";
import { useSelector } from "react-redux";

class Style {
  constructor(private readonly color: ThemeColor = "gray") {}

  layout: CSSProperties = {
    height: "100%",
    padding: "20px 0px",
    backgroundColor: colors[this.color][6],
  };

  comment: CSSProperties = {
    width: "60%",
    margin: "20px auto",
    backgroundColor: colors[this.color][8],
    padding: "10px",
    borderRadius: "10px",
    color: colors[this.color][2],
    border: `1px solid ${colors[this.color][7]}`,
  };

  textcolor: CSSProperties = {
    color: colors[this.color][4],
    fontSize: "1.2EM",
  };

  image: CSSProperties = {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    border: "1px solid black",
  };

  name: CSSProperties = {
    color: colors.white,
    fontSize: "2EM",
  };
}

const AboutPage: NextPage = () => {
  const { color } = useSelector((state: any) => state.theme);
  const style = new Style(color);

  return (
    <Layout style={style.layout}>
      <Row justify="center">
        <Image
          style={style.image}
          alt="diego-heleno.png"
          src="https://diegoheleno.s3.us-east-2.amazonaws.com/public/diego-heleno.jpg"
        />
      </Row>
      <Row style={style.name} justify="center">
        Diego Heleno da Silva
      </Row>
      <CommentComponent comments={about}></CommentComponent>
    </Layout>
  );
};

export default AboutPage;
