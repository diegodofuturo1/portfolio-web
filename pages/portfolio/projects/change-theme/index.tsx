import "antd/dist/antd.css";
import { NextPage } from "next";
import Router from "next/router";
import { CSSProperties } from "react";
import { Button, Layout, Row, Tooltip } from "antd";
import { useSelector } from "react-redux";
import colors, { colorList } from "../../../../utils/colors";
import { ThemeColor } from "../../../../store/reducers/theme";
import { ArrowLeftOutlined } from "@ant-design/icons";
import ButtonColorComponent from "../../../../components/button-color";

class Style {
  constructor(private readonly color: ThemeColor = "gray") {}

  layout: CSSProperties = {
    height: "100%",
    padding: "20px",
    backgroundColor: colors[this.color][6],
  };

  button: CSSProperties = {
    color: colors[this.color][0],
    backgroundColor: colors[this.color][8],
    margin: "0px 10px",
  };
}

const ChangeThemePage: NextPage = () => {
  const { color }: { color: ThemeColor } = useSelector(
    (state: any) => state.theme
  );
  const style = new Style(color);

  return (
    <Layout style={style.layout}>
      <Row
        align="middle"
        style={{
          margin: "5px",
          padding: "5px",
          color: "white",
          fontSize: "1.2EM",
          fontWeight: "bolder",
          backgroundColor: colors[color][7],
        }}
      >
        <Tooltip title="Voltar">
          <Button
            onClick={() => Router.push("/portfolio/projects")}
            shape="circle"
            size="small"
            style={style.button}
          >
            <ArrowLeftOutlined />
          </Button>
        </Tooltip>
        <Row style={{ margin: "0px 10px" }}>Escolha uma das cores</Row>
      </Row>
      <Row>
        {colorList.map((_color) => (
          <ButtonColorComponent color={_color} key={`button-color-${_color}`} />
        ))}
      </Row>
    </Layout>
  );
};

export default ChangeThemePage;
