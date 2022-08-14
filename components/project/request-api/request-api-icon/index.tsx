import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import colors from 'utils/colors';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { ThemeColor } from 'store/reducers/theme.reducer';

interface RequestApiButtonComponentProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const RequestApiIconComponent = (props: RequestApiButtonComponentProps) => {
  const { open, setOpen } = props;
  const { color }: { color: ThemeColor } = useSelector((state: any) => state.theme);
  return (
    <Col span={4} onClick={() => setOpen(!open)}>
      <Row
        justify="center"
        align="middle"
        style={{
          backgroundColor: colors[color][7],
          color: colors[color][1],
          fontWeight: 'bolder',
          height: '30px',
          width: '100%',
        }}
      >
        {open ? <UpOutlined /> : <DownOutlined />}
      </Row>
    </Col>
  );
};

export default RequestApiIconComponent;
