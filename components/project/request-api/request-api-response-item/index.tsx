import { Col, Row } from 'antd';
import colors from 'utils/colors';
import { useSelector } from 'react-redux';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ThemeColor } from 'store/reducers/theme.reducer';

interface RequestApiResponseItemComponentProps {
  prop: string;
  value?: string;
}

function useRenderOnWindowResize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const RequestApiResponseItemComponent = (props: RequestApiResponseItemComponentProps) => {
  const { prop, value } = props;
  const { color }: { color: ThemeColor } = useSelector((state: any) => state.theme);
  const ref = useRef<HTMLHeadingElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useRenderOnWindowResize();

  const resizehandler = () => {
    if (ref && ref.current && ref.current.offsetHeight) {
      setHeight(ref.current.offsetHeight);
    }
  };

  useEffect(resizehandler, [ref.current?.offsetHeight]);

  const render = () => {
    if (value) {
      return (
        <Row style={{ padding: `1px` }} align="middle" justify="center">
          <Col
            span={6}
            style={{
              backgroundColor: colors[color][5],
              height: height,
            }}
          >
            <Row justify="center" align="middle" style={{ height: '100%' }}>
              {prop}
            </Row>
          </Col>
          <Col
            span={18}
            style={{
              backgroundColor: colors[color][4],
            }}
          >
            <Row
              ref={ref}
              style={{
                padding: `0px 10px `,
                wordBreak: `break-all`,
                overflow: `auto`,
                color: colors[color][9],
              }}
            >
              {value}
            </Row>
          </Col>
        </Row>
      );
    }

    return (
      <Row
        justify="center"
        style={{
          padding: `1px`,
          margin: `1px 0px`,
          backgroundColor: colors[color][5],
        }}
      >
        <Col>{prop}</Col>
      </Row>
    );
  };

  return render();
};

export default RequestApiResponseItemComponent;
