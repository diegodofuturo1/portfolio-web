import "antd/dist/antd.css";
import { NextPage } from "next";
import { CSSProperties } from "react";
import { useSelector } from "react-redux";
import { Layout, Row } from "antd";
import colors, { colorList } from "../../../../utils/colors";
import { ThemeColor } from "../../../../store/reducers/theme.reducer";
import ButtonColorComponent from "../../../../components/button-color";
import ProjectHeaderComponent from "../../../../components/project-header";

class Style {
  constructor(private readonly color: ThemeColor = "gray") {}

  layout: CSSProperties = {
    height: "100%",
    padding: "20px",
    backgroundColor: colors[this.color][6],
  };

  button: CSSProperties = {
    color: colors[this.color][1],
    backgroundColor: colors[this.color][8],
    border: `0px solid ${colors[this.color][1]}`,
    margin: "0px 5px",
    height: "40px",
    width: "40px",
    fontSize: "1.2EM",
  };
}

const ChangeThemePage: NextPage = () => {
  const { color }: { color: ThemeColor } = useSelector(
    (state: any) => state.theme
  );
  const style = new Style(color);

  return (
    <Layout style={style.layout}>
      <ProjectHeaderComponent title="Seleção de Tema" />
      <Row>
        {colorList.map((_color) => (
          <ButtonColorComponent color={_color} key={`button-color-${_color}`} />
        ))}
      </Row>
    </Layout>
  );
};

export default ChangeThemePage;
