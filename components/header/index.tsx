import { CSSProperties, useState } from "react";
import colors from "../../utils/colors";
import { useSelector } from "react-redux";
import { Affix, Alert, Avatar, Button, Col, Drawer, Input, Row } from "antd";
import { UserOutlined, CloseOutlined, TrophyOutlined } from "@ant-design/icons";
import { ThemeColor } from "../../store/reducers/theme";

class Style {
  constructor(
    private readonly color: ThemeColor = "gray",
    private readonly mode: "SignIn" | "SignUp"
  ) {}

  header: CSSProperties = {
    padding: "10px 20px",
    color: colors.white,
    backgroundColor: colors[this.color][9],
  };

  icon: CSSProperties = {
    color: colors[this.color][2],
  };

  trophy: CSSProperties = {
    color: colors[this.color][5],
    fontSize: "1.8EM",
    margin: "0px 10px",
  };

  title: CSSProperties = {
    color: colors[this.color][2],
    fontWeight: "bold",
  };

  drawerBody: CSSProperties = {
    backgroundColor: colors[this.color][7],
  };

  drawerHeader: CSSProperties = {
    backgroundColor: colors[this.color][9],
    color: colors[this.color][2],
    borderBottom: `5px solid ${colors[this.color][6]}`,
  };

  input: CSSProperties = {
    backgroundColor: colors[this.color][5],
    border: `3x solid ${colors[this.color][4]}`,
    marginBottom: "20px",
  };

  label: CSSProperties = {
    fontSize: "1.1EM",
    fontWeight: "bold",
    color: colors[this.color][2],
  };

  button: CSSProperties = {
    color: colors[this.color][3],
    backgroundColor: colors[this.color][7],
    border: `3x solid ${colors[this.color][4]}`,
    width: "100%",
    margin: "20px 0px",
  };

  menu: CSSProperties = {
    backgroundColor: colors[this.color][8],
    color: colors[this.color][3],
    padding: "10px 0px",
    cursor: "pointer",
    border: `1px solid ${colors[this.color][7]}`,
  };

  menuSignIn: CSSProperties = {
    ...this.menu,
    borderBottom:
      this.mode == "SignIn" ? `5px solid ${colors[this.color][5]}` : undefined,
  };

  menuSignUp: CSSProperties = {
    ...this.menu,
    borderBottom:
      this.mode == "SignUp" ? `5px solid ${colors[this.color][5]}` : undefined,
  };

  menuButton: CSSProperties = {
    color: colors[this.color][4],
    backgroundColor: colors[this.color][9],
    border: `1px solid ${colors[this.color][4]}`,
    margin: "0px 10px",
  };
}

const HeaderComponent = () => {
  const { color }: { color: ThemeColor } = useSelector(
    (state: any) => state.theme
  );

  const [drawer, setDrawer] = useState(false);
  const [mode, setMode] = useState<"SignIn" | "SignUp">("SignIn");
  const style = new Style(color, mode);

  return (
    <Affix>
      <Row align="middle" justify="space-between" style={style.header}>
        <Row align="middle" justify="center">
          <TrophyOutlined style={style.trophy} />
          Meu Portfólio
        </Row>
        <Row>
          <Button style={style.menuButton} onClick={() => setDrawer(!drawer)}>
            SignIn
          </Button>
          <Avatar size={32} icon={<UserOutlined />} />
        </Row>
        <Drawer
          visible={drawer}
          closeIcon={<CloseOutlined style={style.icon} />}
          onClose={() => setDrawer(!drawer)}
          title={<Row style={style.title}>{mode}</Row>}
          drawerStyle={style.drawerBody}
          headerStyle={style.drawerHeader}
        >
          <Row>
            <Col span={12}>
              <Row
                justify="center"
                onClick={() => setMode("SignIn")}
                style={style.menuSignIn}
              >
                SignIn
              </Row>
            </Col>
            <Col span={12}>
              <Row
                justify="center"
                onClick={() => setMode("SignUp")}
                style={style.menuSignUp}
              >
                SignUp
              </Row>
            </Col>
          </Row>
          <Col
            style={{ padding: "10px 20px", backgroundColor: colors[color][6] }}
          >
            <Row style={style.label}>Email</Row>
            <Input size="small" style={style.input}></Input>

            <Row style={style.label}>Password</Row>
            <Input type="password" size="small" style={style.input}></Input>

            <Button style={style.button}>
              {mode == "SignIn" ? "Entrar" : "Cadastrar"}
            </Button>
          </Col>
        </Drawer>
      </Row>
    </Affix>
  );
};

export default HeaderComponent;
