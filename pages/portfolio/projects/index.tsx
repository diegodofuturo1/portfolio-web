import 'antd/dist/antd.css';
import { NextPage } from 'next';
import { Layout, Row } from 'antd';
import { CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../../utils/colors';
import { ThemeColor } from '../../../store/reducers/theme.reducer';
import { Dispatcher } from '../../../store/dispathers';
import { BgColorsOutlined, LoginOutlined, ClockCircleOutlined } from '@ant-design/icons';
import RequestApiItemComponent from '../../../components/project-item';

class Style {
  constructor(private readonly color: ThemeColor = 'gray') {}

  layout: CSSProperties = {
    height: '100%',
    padding: '20px',
    backgroundColor: colors[this.color][6],
  };
}

const ProjectPage: NextPage = () => {
  const { color }: { color: ThemeColor } = useSelector((state: any) => state.theme);

  const style = new Style(color);
  const disptcher = new Dispatcher(useDispatch());

  return (
    <Layout style={style.layout}>
      <Row>
        <RequestApiItemComponent
          title="Testes"
          discription="Testes automatizados"
          badge={
            <>
              <ClockCircleOutlined />
              {'  Em breve'}
            </>
          }
        />
        <RequestApiItemComponent
          route="projects/request-api"
          title="API"
          discription="Interface de testes de API`s do site"
          badge={
            <>
              <ClockCircleOutlined />
              {'  Novo'}
            </>
          }
        />
        <RequestApiItemComponent
          title="SignIn/SignOut"
          discription="Autenticação de usuários do site!"
          badge={<LoginOutlined />}
          onClick={disptcher.user.openDrawer}
        />
        <RequestApiItemComponent
          route="projects/change-theme"
          title="Change Theme"
          discription="Altere o padrão de cores do site!"
          badge={<BgColorsOutlined />}
        />
      </Row>
    </Layout>
  );
};

export default ProjectPage;
