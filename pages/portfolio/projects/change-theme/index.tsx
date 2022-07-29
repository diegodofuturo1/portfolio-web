import "antd/dist/antd.css";
import { NextPage } from "next";
import Router from "next/router";
import { CSSProperties } from "react";
import { useSelector } from "react-redux";
import { Button, Layout, Row, Tooltip } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import colors, { colorList } from "../../../../utils/colors";
import { ThemeColor } from "../../../../store/reducers/theme.reducer";
import ButtonColorComponent from "../../../../components/button-color";

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
      <Row
        align="middle"
        style={{
          margin: "0px 5px 20px 5px",
          padding: "15px",
          color: "white",
          fontSize: "1.2EM",
          fontWeight: "bolder",
          backgroundColor: colors[color][7],
          borderLeft: `6px solid ${colors[color][5]}`,
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
