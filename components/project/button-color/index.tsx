import { Col, Row } from 'antd';
import { useState } from 'react';
import colors from 'utils/colors';
import { CheckOutlined } from '@ant-design/icons';
import { Dispatcher } from 'store/dispathers';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeColor } from 'store/reducers/theme.reducer';

interface ButtonColorComponentProps {
  color: ThemeColor;
  key: string;
}

const ButtonColorComponent = (props: ButtonColorComponentProps) => {
  const { color }: { color: ThemeColor } = useSelector((state: any) => state.theme);

  const [hover, setHover] = useState(false);

  const dispatcher = new Dispatcher(useDispatch());

  return (
    <Col
      xs={{ span: 12 }}
      sm={{ span: 12 }}
      md={{ span: 6 }}
      lg={{ span: 4 }}
      xl={{ span: 4 }}
      xxl={{ span: 4 }}
      style={{ padding: '5px' }}
      key={props.key}
    >
      <Row
        justify="center"
        align="middle"
        onClick={() => dispatcher.theme.colorChange(props.color)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: hover ? colors[props.color][6] : colors[props.color][5],
          color: colors.white,
          cursor: 'pointer',
          height: '30px',
          fontSize: '1.1EM',
          fontWeight: 'bolder',
          width: hover ? '98%' : '100%',
          border: color == props.color ? `1px solid ${colors[props.color][3]}` : undefined,
          borderLeft:
            color != props.color
              ? `6px solid ${colors[props.color][7]}`
              : `12px solid ${colors[props.color][3]}`,
        }}
      >
        <Col span={16} offset={4}>
          <Row justify="center">{props.color}</Row>
        </Col>
        <Col span={4}>{color == props.color ? <CheckOutlined /> : undefined}</Col>
      </Row>
    </Col>
  );
};

export default ButtonColorComponent;
