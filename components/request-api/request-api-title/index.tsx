import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import colors from '../../../utils/colors';
import { ThemeColor } from '../../../store/reducers/theme.reducer';

interface RequestApiButtonComponentProps {
  setOpen: (value: boolean) => void;
  title: string;
  open: boolean;
}

const RequestApiTitleComponent = (props: RequestApiButtonComponentProps) => {
  const { setOpen, title, open } = props;
  const { color }: { color: ThemeColor } = useSelector((state: any) => state.theme);

  return (
    <Col span={14} onClick={() => setOpen(!open)}>
      <Row
        justify="center"
        align="middle"
        style={{
          backgroundColor: colors[color][7],
          color: colors[color][1],
          fontWeight: 'bolder',
          height: '30px',
        }}
      >
        {title}
      </Row>
    </Col>
  );
};

export default RequestApiTitleComponent;
