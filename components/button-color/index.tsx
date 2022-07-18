import { Col, Row } from "antd";
import { Dispatcher } from "../../store/dispathers";
import { ThemeColor } from "../../store/reducers/theme.reducer";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../utils/colors";

interface ButtonColorComponentProps {
  color: ThemeColor;
  key: string;
}

const ButtonColorComponent = (props: ButtonColorComponentProps) => {
  const { color }: { color: ThemeColor } = useSelector(
    (state: any) => state.theme
  );

  const dispatcher = new Dispatcher(useDispatch());

  return (
    <Col
      xs={{ span: 12 }}
      sm={{ span: 12 }}
      md={{ span: 6 }}
      lg={{ span: 4 }}
      xl={{ span: 3 }}
      xxl={{ span: 3 }}
      style={{ padding: "5px" }}
      key={props.key}
    >
      <Row
        justify="center"
        onClick={() => dispatcher.theme.colorChange(props.color)}
        style={{
          backgroundColor: colors[props.color][5],
          color: colors.white,
          cursor: "pointer",
          border:
            color != props.color
              ? `2px solid ${colors[props.color][7]}`
              : `2px solid ${colors[props.color][3]}`,
        }}
      >
        {props.color}
      </Row>
    </Col>
  );
};

export default ButtonColorComponent;
