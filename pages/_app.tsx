import "../styles/globals.css";
import colors from "../utils/colors";
import { CSSProperties } from "react";
import { storeWrapper } from "../store";
import type { AppProps } from "next/app";
import MenuItemComponent from "../components/menuitem";
import { Content, Footer } from "antd/lib/layout/layout";
import { Affix, Avatar, Button, Col, Layout, message, Row } from "antd";
import {
  UserOutlined,
  InfoCircleOutlined,
  BookOutlined,
  ExperimentOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  FilePdfOutlined,
  GoogleOutlined,
  GithubOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import { ThemeColor } from "../store/reducers/theme.reducer";
import { useSelector } from "react-redux";
import HeaderComponent from "../components/header";

class Style {
  constructor(private readonly color: ThemeColor = "gray") {}

  col: CSSProperties = {
    margin: "20px auto",
    height: "100%",
  };

  menu: CSSProperties = {
    borderRadius: "5px 5px 0px 0px",
    backgroundColor: colors[this.color][9],
  };

  layout: CSSProperties = {
    backgroundColor: colors[this.color][7],
    minHeight: "100vh",
    minWidth: "400px",
  };

  footer: CSSProperties = {
    padding: "0px",
    color: colors.white,
    backgroundColor: colors[this.color][9],
  };

  footeritem: CSSProperties = {
    margin: "0px 20px",
  };

  icon: CSSProperties = {
    color: colors.white,
    backgroundColor: colors[this.color][9],
    fontSize: "1.2EM",
    margin: "10px 2px",
  };

  link: CSSProperties = {
    color: colors.white,
    cursor: "pointer",
    margin: "10px 2px",
  };
}

function MyApp({ Component, pageProps }: AppProps) {
  const { color } = useSelector((state: any) => state.theme);
  const style = new Style(color);

  return (
    <Row style={{ margin: "0px", height: "100%" }}>
      <Col span={24}>
        <Layout style={style.layout}>
          <HeaderComponent />
          <Content style={{ minHeight: "100vh" }}>
            <Col
              style={style.col}
              xs={{ span: 23 }}
              sm={{ span: 23 }}
              md={{ span: 23 }}
              lg={{ span: 20 }}
              xl={{ span: 16 }}
              xxl={{ span: 12 }}
            >
              <Row style={style.menu}>
                <MenuItemComponent
                  id="projects"
                  icon={<ProjectOutlined />}
                  text="Projetos"
                />
                <MenuItemComponent
                  id="about"
                  icon={<InfoCircleOutlined />}
                  text="Sobre Mim"
                />

                <MenuItemComponent
                  id="education"
                  icon={<BookOutlined />}
                  text="Educação"
                />

                <MenuItemComponent
                  id="experience"
                  icon={<ExperimentOutlined />}
                  text="Experiência"
                />
              </Row>
              <Component {...pageProps} />
            </Col>
          </Content>
          <Affix offsetBottom={0}>
            <Footer style={style.footer}>
              <Row justify="center" align="middle">
                <Col>
                  <Row align="middle" style={style.footeritem}>
                    <LinkedinOutlined style={style.icon} />
                    <a
                      style={style.link}
                      target="_blank"
                      rel="noreferrer"
                      href={
                        "https://www.linkedin.com/in/diego-heleno-3b4615152/"
                      }
                    >
                      Linkedin
                    </a>
                  </Row>
                </Col>
                <Col>
                  <Row align="middle" style={style.footeritem}>
                    <WhatsAppOutlined style={style.icon} />
                    <a
                      style={style.link}
                      target="_blank"
                      rel="noreferrer"
                      href={"whatsapp://send?phone=+5511991198744"}
                      onClick={() => {
                        navigator.clipboard.writeText("+5511991198744");
                        message.success(
                          'Telefone "+5511991198744" copiado com sucesso'
                        );
                      }}
                    >
                      WhatsApp
                    </a>
                  </Row>
                </Col>
                <Col>
                  <Row align="middle" style={style.footeritem}>
                    <GoogleOutlined style={style.icon} />
                    <a
                      onClick={() => {
                        navigator.clipboard.writeText(
                          "diegodofuturo1@gmail.com"
                        );
                        message.success(
                          'Email "diegodofuturo1@gmail.com" copiado com sucesso'
                        );
                      }}
                      style={style.link}
                    >
                      Gmail
                    </a>
                  </Row>
                </Col>
                <Col>
                  <Row align="middle" style={style.footeritem}>
                    <FilePdfOutlined style={style.icon} />
                    <a
                      target="_blank"
                      rel="noreferrer"
                      style={style.link}
                      href={
                        "https://diegoheleno.s3.us-east-2.amazonaws.com/public/diego-heleno.curriculo.20220726.pdf"
                      }
                    >
                      Currículo
                    </a>
                  </Row>
                </Col>

                <Col>
                  <Row align="middle" style={style.footeritem}>
                    <GithubOutlined style={style.icon} />
                    <a
                      target="_blank"
                      rel="noreferrer"
                      style={style.link}
                      href={
                        "https://github.com/diegodofuturo1?tab=repositories"
                      }
                    >
                      GitHub
                    </a>
                  </Row>
                </Col>
              </Row>
            </Footer>
          </Affix>
        </Layout>
      </Col>
    </Row>
  );
}

export default storeWrapper.withRedux(MyApp);
