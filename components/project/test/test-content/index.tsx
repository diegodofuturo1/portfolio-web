import service from 'service';
import { Col, Row } from 'antd';
import colors from 'utils/colors';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Foreach from 'components/utils/Foreach';
import { TestDto } from 'dtos/request/test.dto';
import { ThemeColor } from 'store/reducers/theme.reducer';
import TestContentInfoComponent from '../test-content-info';
import { CaretRightOutlined, PlusOutlined } from '@ant-design/icons';

const TestContentComponent = () => {
  const { color }: { color: ThemeColor } = useSelector((state: any) => state.theme);
  const [tests, setTests] = useState<any[]>([]);
  const [order, setOrder] = useState<number>(0);

  useEffect(() => {
    const execute = async () => {
      const response = await service.request.getTests();
      if (response) {
        setTests(response);
      }
    };
    execute();
  }, []);

  const mapping = (test: TestDto) => <TestContentInfoComponent key={test.id} test={test} order={order} next={() => setOrder((order) => order + 1)} />;

  return (
    <>
      <Row
        style={{
          padding: '5px 0px',
          backgroundColor: colors[color][8],
          borderLeft: `5px solid ${colors[color][5]}`,
          color: colors[color][2],
        }}
        align="middle"
        justify="space-between"
      >
        <Row style={{ cursor: 'pointer', padding: '0px 10px' }} onClick={() => setOrder(1)}>
          <CaretRightOutlined style={{ fontSize: '1.4EM' }} />
        </Row>
        <Row>Autenticação</Row>
        <Row style={{ cursor: 'pointer', padding: '0px 10px' }}>
          <PlusOutlined style={{ fontSize: '1.3EM' }} />
        </Row>
      </Row>
      <Row
        style={{
          padding: '5px',
          backgroundColor: colors[color][7],
          borderLeft: `5px solid ${colors[color][5]}`,
          color: colors[color][2],
        }}
      >
        <Col>
          <Foreach dataSource={tests} map={mapping} />
        </Col>
      </Row>
    </>
  );
};

export default TestContentComponent;
