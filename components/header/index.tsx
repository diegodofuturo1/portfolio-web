import LoginComponent from "../login";
import colors from "../../utils/colors";
import { Affix, Avatar, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { PortifolioState } from "../../store/reducers";
import { CSSProperties, useState } from "react";
import { ThemeColor } from "../../store/reducers/theme.reducer";
import { UserOutlined, TrophyOutlined } from "@ant-design/icons";
import { Dispatcher } from "../../store/dispathers";

class Style {
  constructor(private readonly color: ThemeColor = "gray") {}

  header: CSSProperties = {
    padding: "10px 20px",
    color: colors.white,
    backgroundColor: colors[this.color][9],
  };

  trophy: CSSProperties = {
    color: colors[this.color][5],
    fontSize: "1.8EM",
    margin: "0px 10px",
  };

  loginLink: CSSProperties = {
    color: colors[this.color][4],
    margin: "0px 20px",
  };
}

const HeaderComponent = () => {
  const {
    theme: { color },
    user: { currentUser, drawer },
  } = useSelector((state: PortifolioState) => state);

  const style = new Style(color);
  const disptcher = new Dispatcher(useDispatch());

  return (
    <Affix>
      <Row align="middle" justify="space-between" style={style.header}>
        <Row align="middle" justify="center">
          <TrophyOutlined style={style.trophy} />
          Meu Portfólio
        </Row>
        <Row align="middle">
          <a
            style={style.loginLink}
            onClick={() => disptcher.user.openDrawer()}
          >
            {currentUser?.id ? currentUser.name : "SignIn"}
          </a>
          <Avatar src={currentUser?.avatar} size={32} icon={<UserOutlined />} />
        </Row>
        <LoginComponent
          visible={drawer}
          setVisible={disptcher.user.closeDrawer}
        />
      </Row>
    </Affix>
  );
};

export default HeaderComponent;
