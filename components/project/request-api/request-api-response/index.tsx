import { Col, Row } from 'antd';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import colors from 'utils/colors';
import { LoadingOutlined } from '@ant-design/icons';
import { ThemeColor } from 'store/reducers/theme.reducer';
import LoadingComponent from 'components/loading';

interface RequestApiResponseComponentProps {
  response: any;
  loading?: boolean;
}

const RequestApiResponseComponent = (props: RequestApiResponseComponentProps) => {
  const { response, loading } = props;
  const elements: ReactNode[] = [];
  const { color }: { color: ThemeColor } = useSelector((state: any) => state.theme);

  const createElements = (object: any) => {
    for (const prop in object) {
      if (typeof response[prop] === 'object') {
        elements.push(
          <Row
            justify="center"
            style={{
              padding: `1px`,
              margin: `1px 0px`,
              backgroundColor: colors[color][5],
            }}
          >
            <Col>{prop}</Col>
          </Row>,
        );
        createElements(object[prop]);
      } else {
        elements.push(
          <Row style={{ padding: `1px` }} align="top" justify="center">
            <Col
              span={6}
              style={{
                backgroundColor: colors[color][5],
              }}
            >
              <Row justify="center">{prop}</Row>
            </Col>
            <Col
              span={18}
              style={{
                backgroundColor: colors[color][4],
              }}
            >
              <Row
                style={{
                  padding: `0px 10px `,
                  wordBreak: `break-all`,
                  overflow: `auto`,
                  color: colors[color][7],
                }}
              >
                {object[prop]}
              </Row>
            </Col>
          </Row>,
        );
      }
    }
  };

  createElements(response);

  return (
    <>
      {!loading ? (
        <Col
          hidden={!elements?.length}
          style={{
            padding: `10px 5px`,
            color: colors[color][2],
            fontWeight: 700,
          }}
        >
          Resposta: {elements}
        </Col>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
};

export default RequestApiResponseComponent;
