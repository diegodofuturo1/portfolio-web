import { Col, Row } from 'antd';
import colors from 'utils/colors';
import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { ThemeColor } from 'store/reducers/theme.reducer';

const LoadingComponent = () => {
  const { color }: { color: ThemeColor } = useSelector((state: any) => state.theme);

  return (
    <Col span={24} style={{ fontWeight: 1000, padding: `20px`, color: colors[color][4] }}>
      <Row justify="center" align="middle" style={{ fontSize: `2EM` }}>
        <LoadingOutlined />
      </Row>
      <Row justify="center" align="middle" style={{ fontSize: `1.1EM` }}>
        Carregando...
      </Row>
    </Col>
  );
};

export default LoadingComponent;
