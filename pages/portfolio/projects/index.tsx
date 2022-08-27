import 'antd/dist/antd.css';
import { NextPage } from 'next';
import { Layout, Row } from 'antd';
import { CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import colors from 'utils/colors';
import { ThemeColor } from 'store/reducers/theme.reducer';
import { Dispatcher } from 'store/dispathers';
import { BgColorsOutlined, LoginOutlined, CloudUploadOutlined, ExperimentOutlined, FormOutlined } from '@ant-design/icons';
import ProjectItemComponent from 'components/project/project-item';

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
        <ProjectItemComponent
          // route="projects/test"
          title="Tarefas"
          discription="Gerenciador de Tarefas"
          badge={
            <>
              <FormOutlined />
              {'  Em breve'}
            </>
          }
        />
        <ProjectItemComponent
          // route="projects/test"
          title="Banco de Dados"
          discription="Interface de consulta de dados"
          badge={
            <>
              <FormOutlined />
              {'  Em breve'}
            </>
          }
        />
        <ProjectItemComponent
          route="projects/test"
          title="Testes"
          discription="Testes automatizados"
          badge={
            <>
              <ExperimentOutlined />
              {'  Novo'}
            </>
          }
        />
        <ProjectItemComponent
          route="projects/request-api"
          title="API"
          discription="Interface de testes de API"
          badge={
            <>
              <CloudUploadOutlined />
              {'  Novo'}
            </>
          }
        />
        <ProjectItemComponent
          title="Login"
          discription="Cadastro e autenticação de usuários"
          badge={<LoginOutlined />}
          onClick={disptcher.user.openDrawer}
        />
        <ProjectItemComponent
          route="projects/change-theme"
          title="Tema"
          discription="Altere o padrão de cores do site!"
          badge={<BgColorsOutlined />}
        />
      </Row>
    </Layout>
  );
};

export default ProjectPage;
