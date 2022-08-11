import { Button, Row } from 'antd';
import { useSelector } from 'react-redux';
import { ThemeColor } from '../../../store/reducers/theme.reducer';
import colors from '../../../utils/colors';

interface RequestApiButtonComponentProps {
  onclickHandler: () => void;
  loading?: boolean;
}

const RequestApiButtonComponent = (props: RequestApiButtonComponentProps) => {
  const { onclickHandler, loading } = props;
  const { color }: { color: ThemeColor } = useSelector((state: any) => state.theme);

  return (
    <Row style={{ padding: '5px' }}>
      <Button
        onClick={onclickHandler}
        disabled={loading}
        style={{
          width: '100%',
          fontWeight: 'bolder',
          color: colors[color][0],
          backgroundColor: colors[color][7],
          border: '0px',
        }}
      >
        {loading ? `...` : `Executar`}
      </Button>
    </Row>
  );
};

export default RequestApiButtonComponent;
