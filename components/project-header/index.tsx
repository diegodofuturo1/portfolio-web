import { Button, Row, Tooltip } from "antd";
import Router from "next/router";
import { useSelector } from "react-redux";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { CSSProperties } from "react";
import { ThemeColor } from "../../store/reducers/theme.reducer";
import colors from "../../utils/colors";

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

interface ProjectHeaderComponentProps {
  title: string;
}

const ProjectHeaderComponent = (props: ProjectHeaderComponentProps) => {
  const { title } = props;

  const { color }: { color: ThemeColor } = useSelector(
    (state: any) => state.theme
  );

  const style = new Style(color);

  return (
    <Row
      align="middle"
      style={{
        marginBottom: "20px",
        padding: "15px",
        color: "white",
        fontSize: "1.2EM",
        fontWeight: "bolder",
        backgroundColor: colors[color][7],
        borderLeft: `6px solid ${colors[color][5]}`,
        boxShadow: "2px 2px 4px 0px black",
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
      <Row style={{ margin: "0px 10px" }}>{title}</Row>
    </Row>
  );
};

export default ProjectHeaderComponent;