import { Badge, Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import Router from "next/router";
import { CSSProperties, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { text } from "stream/consumers";
import { ThemeColor } from "../../store/reducers/theme";
import colors from "../../utils/colors";

const colSpan = {
  xs: { span: 12 },
  sm: { span: 12 },
  md: { span: 8 },
  lg: { span: 8 },
  xl: { span: 6 },
  xxl: { span: 6 },
};

class Style {
  constructor(private readonly color: ThemeColor = "gray") {}

  col: CSSProperties = {
    padding: "5px 20px 5px 0px",
    height: "100%",
    transition: "color .3s ease-in-out, box-shadow .3s ease-in-out",
  };
}

interface ProjectItemComponentProps {
  route: string;
  title: string;
  discription: string;
  badge: string;
}

const ProjectItemComponent = (props: ProjectItemComponentProps) => {
  const { route, title, discription, badge } = props;

  const { color }: { color: ThemeColor } = useSelector(
    (state: any) => state.theme
  );

  const style = new Style(color);
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    if (redirect) Router.push(redirect);
    setRedirect("");
  }, [redirect]);

  return (
    <Col {...colSpan} style={style.col}>
      <Badge.Ribbon text={badge} color={colors[color][5]}>
        <Card
          hoverable
          onClick={() => setRedirect(route)}
          style={{
            backgroundColor: colors[color][7],
            border: `1px solid ${colors[color][6]}`,
            borderLeft: `10px solid ${colors[color][5]}`,
          }}
          bodyStyle={{}}
        >
          <Meta
            title={<Row style={{ color: colors[color][2] }}>{title}</Row>}
            description={
              <Row style={{ color: colors[color][2] }}>{discription}</Row>
            }
          />
        </Card>
      </Badge.Ribbon>
    </Col>
  );
};

export default ProjectItemComponent;
