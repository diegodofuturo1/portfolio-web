import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import colors from 'utils/colors';
import { ThemeColor } from 'store/reducers/theme.reducer';
import { LoadingOutlined, ClockCircleOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { TestDto } from 'dtos/request/test.dto';
import { useState } from 'react';
import service from 'service';
import test from 'node:test';
import next from 'next';
import RequestApiResponseComponent from 'components/project/request-api/request-api-response';
import { getCookie, setCookie } from 'cookies-next';

export interface TestContentInfoComponentProps {
  test: TestDto;
  order: number;
  next: () => void;
}

const TestContentInfoComponent = (props: TestContentInfoComponentProps) => {
  const [error, setError] = useState(false);

  const setStatus = () => {
    if (props.order < props.test.order) {
      return `clock`;
    }
    if (props.order == props.test.order) {
      return `loading`;
    }
    if (error) {
      return `close`;
    }
    return `check`;
  };

  const status: `close` | `check` | `clock` | `loading` = setStatus();

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

        if (statusCode != props.test.expect && code != props.test.expect) setError(true);

        props.next();
      }
    };
    execute();
  }

  return (
    <Row align="middle" style={{ color: renderColor() }}>
      <Row style={{ padding: `0px 10px` }}>{renderIcon()}</Row>
      <Row>{props.test.text}</Row>
    </Row>
  );
};

export default TestContentInfoComponent;
