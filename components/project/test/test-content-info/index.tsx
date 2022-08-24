import { Col, Row } from 'antd';
import service from 'service';
import { useEffect, useState } from 'react';
import colors from 'utils/colors';
import { TestDto } from 'dtos/request/test.dto';
import { getCookie, setCookie } from 'cookies-next';
import { LoadingOutlined, ClockCircleOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { openDrawer } from 'store/actions/user.action';

export interface TestContentInfoComponentProps {
  test: TestDto;
  order: number;
  next: () => void;
}

const TestContentInfoComponent = (props: TestContentInfoComponentProps) => {
  const [status, setStatus] = useState<`close` | `check` | `clock` | `loading`>(`clock`);

  const renderColor = () => {
    switch (status) {
      case `check`:
        return colors['green'][4];
      case `clock`:
        return `white`;
      case `close`:
        return colors['red'][4];
      case `loading`:
        return colors['blue'][4];
    }
  };

  const renderIcon = () => {
    switch (status) {
      case `check`:
        return <CheckCircleOutlined color="green" />;
      case `clock`:
        return <ClockCircleOutlined color="blue" />;
      case `close`:
        return <CloseCircleOutlined color="red" />;
      case `loading`:
        return <LoadingOutlined color="blue" />;
    }
  };

  useEffect(() => {
    if (props.order === props.test.order) {
      setStatus(`loading`);
    }
  }, [props.order]);

  useEffect(() => {
    if (status == `loading`) {
      const execute = async () => {
        const endpoint = await service.request.getEndpointById(props.test.endpointId);
        const params = await service.request.getTestParams(props.test.id);

        if (endpoint && params) {
          const _response = await service.request.execute(endpoint, params, getCookie(`test-token`)?.toString());
          const { statusCode, code, data } = _response;

          if (data?.token) {
            setCookie(`test-token`, data.token);
          }

          if (statusCode != props.test.expect && code != props.test.expect) {
            setStatus(`close`);
          } else {
            setStatus(`check`);
          }

          props.next();
        }
      };
      execute();
    }
  }, [status]);

  return (
    <Row align="middle" style={{ color: renderColor(), textOverflow: `ellipsis`, whiteSpace: `nowrap` }}>
      <Col style={{ padding: `0px 10px` }}>{renderIcon()}</Col>
      <Col span={21}>{props.test.text}</Col>
    </Row>
  );
};

export default TestContentInfoComponent;
