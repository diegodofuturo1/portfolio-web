import "antd/dist/antd.css";
import { NextPage } from "next";
import { Layout, Row } from "antd";
import { CSSProperties } from "react";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../../utils/colors";
import { ThemeColor } from "../../../store/reducers/theme.reducer";
import ProjectItemComponent from "../../../components/project-item";
import { Dispatcher } from "../../../store/dispathers";
import {
  BgColorsOutlined,
  LoginOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

class Style {
  constructor(private readonly color: ThemeColor = "gray") {}

  layout: CSSProperties = {
    height: "100%",
    padding: "20px",
    backgroundColor: colors[this.color][6],
  };
}

const ExperiencePage: NextPage = () => {
  const { color }: { color: ThemeColor } = useSelector(
    (state: any) => state.theme
  );

  const style = new Style(color);
  const disptcher = new Dispatcher(useDispatch());

  return (
    <Layout style={style.layout}>
      <Row>
        <ProjectItemComponent
          route="projects/change-theme"
          title="Change Theme"
          discription="Altere o padrão de cores do site!"
          badge={<BgColorsOutlined />}
        />
        <ProjectItemComponent
          title="SignIn/SignOut"
          discription="Autenticação de usuários do site!"
          badge={
            <>
              <LoginOutlined />
              {"  Novo"}
            </>
          }
          onClick={disptcher.user.openDrawer}
        />
        <ProjectItemComponent
          title="API"
          discription="Conectar site com uma api e banco de dados"
          badge={
            <>
              <ClockCircleOutlined />
              {"  Em breve"}
            </>
          }
        />
      </Row>
    </Layout>
  );
};

export default ExperiencePage;
