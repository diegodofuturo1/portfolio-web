import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { NextPage } from 'next';
import colors from 'utils/colors';
import { CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import { ThemeColor } from 'store/reducers/theme.reducer';
import ProjectHeaderComponent from 'components/project/project-header';
import TestContentComponent from 'components/project/test/test-content';

class Style {
  constructor(private readonly color: ThemeColor = 'gray') {}

  layout: CSSProperties = {
    height: '100%',
    padding: '20px',
    backgroundColor: colors[this.color][6],
  };
}

const TestPage: NextPage = () => {
  const { color }: { color: ThemeColor } = useSelector((state: any) => state.theme);
  const style = new Style(color);

  return (
    <Layout style={style.layout}>
      <ProjectHeaderComponent title="Testes Automatizados" />
      <TestContentComponent />
    </Layout>
  );
};

export default TestPage;
