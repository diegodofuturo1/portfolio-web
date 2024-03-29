import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import colors from 'utils/colors';
import { ThemeColor } from 'store/reducers/theme.reducer';

interface RequestApiButtonComponentProps {
  setOpen: (value: boolean) => void;
  method: string;
  open: boolean;
}

const RequestApiMethodComponent = (props: RequestApiButtonComponentProps) => {
  const { setOpen, method, open } = props;
  const { color }: { color: ThemeColor } = useSelector((state: any) => state.theme);

  let methodColor: ThemeColor = 'gray';

  switch (method) {
    case 'GET':
      methodColor = 'blue';
      break;
    case 'POST':
      methodColor = 'green';
      break;
    case 'PUT':
      methodColor = 'orange';
      break;
    case 'DEL':
      methodColor = 'red';
      break;
  }

  return (
    <Col span={6} onClick={() => setOpen(!open)}>
      <Row
        justify="center"
        align="middle"
        style={{
          backgroundColor: colors[methodColor][6],
          color: colors[color][1],
          fontWeight: 'bolder',
          height: '30px',
        }}
      >
        {method}
      </Row>
    </Col>
  );
};

export default RequestApiMethodComponent;
