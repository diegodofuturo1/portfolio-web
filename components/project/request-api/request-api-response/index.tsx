import { Col } from 'antd';
import { ReactNode } from 'react';
import colors from 'utils/colors';
import { useSelector } from 'react-redux';
import LoadingComponent from 'components/loading';
import { ThemeColor } from 'store/reducers/theme.reducer';
import RequestApiResponseItemComponent from '../request-api-response-item';

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
        elements.push(<RequestApiResponseItemComponent key={`${prop}-response-item`} prop={prop} />);
        createElements(object[prop]);
      } else {
        elements.push(<RequestApiResponseItemComponent key={`${prop}-response-item`} prop={prop} value={object[prop] || `não informado`} />);
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
