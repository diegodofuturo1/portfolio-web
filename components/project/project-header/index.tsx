import Router from 'next/router';
import { Row } from 'antd';
import colors from 'utils/colors';
import { useSelector } from 'react-redux';
import { CloseOutlined } from '@ant-design/icons';
import { ThemeColor } from 'store/reducers/theme.reducer';

interface ProjectHeaderComponentProps {
  title: string;
}

const ProjectHeaderComponent = (props: ProjectHeaderComponentProps) => {
  const { title } = props;
  const { color }: { color: ThemeColor } = useSelector((state: any) => state.theme);

  return (
    <Row
      align="middle"
      justify="space-between"
      style={{
        marginBottom: '20px',
        padding: '15px 10px',
        color: 'white',
        fontSize: '1.2EM',
        fontWeight: 'bolder',
        backgroundColor: colors[color][7],
        borderLeft: `6px solid ${colors[color][5]}`,
      }}
    >
      <Row style={{ margin: '0px 10px' }}>{title}</Row>
      <Row
        onClick={() => Router.push('/portfolio/projects')}
        align="middle"
        justify="center"
        style={{ height: '20px', cursor: 'pointer', fontSize: `1.2EM`, color: colors[color][3] }}
      >
        <CloseOutlined />
      </Row>
    </Row>
  );
};

export default ProjectHeaderComponent;
