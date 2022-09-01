import 'styles/globals.css';
import colors from 'utils/colors';
import { CSSProperties } from 'react';
import { storeWrapper } from 'store';
import type { AppProps } from 'next/app';
import MenuItemComponent from 'components/menuitem';
import { Content, Footer } from 'antd/lib/layout/layout';
import { Affix, Col, Layout, message, Row } from 'antd';
import { ThemeColor } from 'store/reducers/theme.reducer';
import { useDispatch, useSelector } from 'react-redux';
import HeaderComponent from 'components/header';
import { ApplicationState } from 'store/reducers';
import service from 'service';
import { Dispatcher } from 'store/dispathers';
import {
  InfoCircleOutlined,
  BookOutlined,
  ExperimentOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  FilePdfOutlined,
  GoogleOutlined,
  GithubOutlined,
  ProjectOutlined,
} from '@ant-design/icons';

function MyApp({ Component, pageProps }: AppProps) {
  const {
    theme: { color },
    portfolio,
  } = useSelector((state: ApplicationState) => state);

  const style = new Style(color);
  const dispatcher = new Dispatcher(useDispatch());

  const execute = async () => {
    const [_portfolio] = await service.portfolio.getPortfolio();
    dispatcher.portfolio.savePortfolio(_portfolio);
  };

  if (!portfolio.id) {
    execute();
  }

  return (
    <Row style={{ margin: '0px', minHeight: '100vh' }}>
      <Col span={24}>
        <Layout style={style.layout}>
          <HeaderComponent />
          <Content>
            <Col style={style.col} xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 23 }} lg={{ span: 20 }} xl={{ span: 16 }} xxl={{ span: 12 }}>
              <Row style={style.menu}>
                <MenuItemComponent id="projects" icon={<ProjectOutlined />} text="Projetos" />
                <MenuItemComponent id="about" icon={<InfoCircleOutlined />} text="Sobre Mim" />
                <MenuItemComponent id="education" icon={<BookOutlined />} text="Educação" />
                <MenuItemComponent id="experience" icon={<ExperimentOutlined />} text="Experiência" />
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
                    <a style={style.link} target="_blank" rel="noreferrer" href={'https://www.linkedin.com/in/diego-heleno-3b4615152/'}>
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
                      href={'whatsapp://send?phone=+5511991198744'}
                      onClick={() => {
                        navigator.clipboard.writeText('+5511991198744');
                        message.success('Telefone "+5511991198744" copiado com sucesso');
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
                        navigator.clipboard.writeText('diegodofuturo1@gmail.com');
                        message.success('Email "diegodofuturo1@gmail.com" copiado com sucesso');
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
                      href={'https://diegoheleno.s3.us-east-2.amazonaws.com/public/diego-heleno.curriculo.20220726.pdf'}
                    >
                      Currículo
                    </a>
                  </Row>
                </Col>

                <Col>
                  <Row align="middle" style={style.footeritem}>
                    <GithubOutlined style={style.icon} />
                    <a target="_blank" rel="noreferrer" style={style.link} href={'https://github.com/diegodofuturo1?tab=repositories'}>
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

class Style {
  constructor(private readonly color: ThemeColor = 'gray') {}

  col: CSSProperties = {
    margin: '20px auto',
    height: '100%',
    boxShadow: '5px 5px 10px 0px black',
  };

  menu: CSSProperties = {
    backgroundColor: colors[this.color][9],
  };

  layout: CSSProperties = {
    backgroundColor: colors[this.color][7],
    minHeight: '100vh',
    minWidth: '400px',
  };

  footer: CSSProperties = {
    padding: '0px',
    color: colors.white,
    backgroundColor: colors[this.color][9],
  };

  footeritem: CSSProperties = {
    margin: '0px 20px',
  };

  icon: CSSProperties = {
    color: colors.white,
    backgroundColor: colors[this.color][9],
    fontSize: '1.2EM',
    margin: '10px 2px',
  };

  link: CSSProperties = {
    color: colors.white,
    cursor: 'pointer',
    margin: '10px 2px',
  };
}
