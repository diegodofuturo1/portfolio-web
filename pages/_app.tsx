import '../styles/globals.css'
import Link from 'next/link';
import colors from '../utils/colors';
import { CSSProperties } from 'react';
import { storeWrapper } from '../store';
import type { AppProps } from 'next/app';
import MenuItemComponent from '../components/menuitem';
import { Content, Footer } from 'antd/lib/layout/layout';
import { Affix, Avatar, Col, Layout, Menu, message, Row } from 'antd'
import { UserOutlined, InfoCircleOutlined, BookOutlined, ExperimentOutlined, LinkedinOutlined, WhatsAppOutlined, FilePdfOutlined, GoogleOutlined } from '@ant-design/icons';

class Style {
  col: CSSProperties = {
    margin: '20px auto',
    height: '100%'
  }

  menu: CSSProperties = {
    borderRadius: '5px 5px 0px 0px',
    backgroundColor: colors.gray[9],
  }

  header: CSSProperties = {
    padding: '10px',
    color: colors.white,
    backgroundColor: colors.gray[9],
  }

  layout: CSSProperties = {
    backgroundColor: colors.gray[7],
    minHeight: '100vh',
    minWidth: '400px'
  }

  footer: CSSProperties = {
    padding: '0px',
    color: colors.white,
    backgroundColor: colors.gray[9],
  }

  icon: CSSProperties = {
    color: colors.white,
    backgroundColor: colors.gray[9],
    fontSize: '1.2EM',
    margin: '20px 5px 20px 50px'
  }

  link: CSSProperties = {
    color: colors.white,
    cursor: 'pointer',
  }
}

function MyApp({ Component, pageProps }: AppProps) {

  const style = new Style

  return <Row style={{ margin: '0px', height: '100%' }}>
    <Col span={24}>
      <Layout style={style.layout}>
        <Affix>
          <Row align='middle' justify='space-between' style={style.header}>
            <Row align='middle' justify='center'>Meu Portifólio</Row>
            <Avatar size={32} icon={<UserOutlined />} />
          </Row>
        </Affix>

        <Content>
          <Col style={style.col} xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 23 }} lg={{ span: 20 }} xl={{ span: 16 }} xxl={{ span: 12 }}>
            <Affix>
              <Menu theme='dark' mode={"horizontal"} style={style.menu}>
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
              </ Menu>
            </Affix>
            <Component {...pageProps} />
          </Col>
        </Content>
        <Affix offsetBottom={0}>
          <Footer style={style.footer}>
            <Row justify='center' align='middle'>
              <Row align='middle'>
                <LinkedinOutlined style={style.icon} />
                <a
                  style={style.link}
                  target='_blank'
                  href={'https://www.linkedin.com/in/diego-heleno-3b4615152/'}>
                  Linkedin
                </a>
              </Row>
              <Row align='middle'>
                <WhatsAppOutlined style={style.icon} />
                <a
                  style={style.link}
                  target='_blank'
                  href={'whatsapp://send?phone=+5511991198744'}>
                  WhatsApp
                </a>
              </Row>
              <Row align='middle'>
                <GoogleOutlined style={style.icon} />
                <a onClick={() => {
                  navigator.clipboard.writeText('diegodofuturo1@gmail.com');
                  message.success('Email "diegodofuturo1@gmail.com" copiado com sucesso')
                }}
                  style={style.link}
                >Gmail</a>
              </Row>
              <Row align='middle'>
                <FilePdfOutlined style={style.icon} />
                <a
                  target='_blank'
                  style={style.link}
                  href={'https://diegoheleno.s3.us-east-2.amazonaws.com/public/diego-heleno.curriculo.20220711.pdf'}>
                  Currículo
                </a>
              </Row>
            </Row>
          </Footer>
        </Affix>
      </Layout>
    </Col>
  </Row>
}

export default storeWrapper.withRedux(MyApp)
