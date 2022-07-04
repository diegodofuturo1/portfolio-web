import '../styles/globals.css'
import colors from '../utils/colors';
import { CSSProperties } from 'react';
import { storeWrapper } from '../store';
import type { AppProps } from 'next/app';
import { Avatar, Col, Layout, Menu, Row } from 'antd'
import MenuItemComponent from '../components/menuitem';
import { UserOutlined, InfoCircleOutlined, BookOutlined, ExperimentOutlined } from '@ant-design/icons';

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
}

function MyApp({ Component, pageProps }: AppProps) {

  const style = new Style

  return <Row style={{ margin: '0px', height: '100%' }}>
    <Col span={24}>
      <Layout style={style.layout}>
        <Row align='middle' justify='space-between' style={style.header}>
          <Row align='middle' justify='center'>Meu Portifólio</Row>
          <Avatar size={32} icon={<UserOutlined />} />
        </Row>
        <Row>
          <Col style={style.col} xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 23 }} lg={{ span: 20 }} xl={{ span: 16 }} xxl={{ span: 12 }}>
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
                text="Experiencia"
              />
            </ Menu>
            <Component {...pageProps} />
          </Col>
        </Row>
      </Layout>
    </Col>
  </Row>
}

export default storeWrapper.withRedux(MyApp)
