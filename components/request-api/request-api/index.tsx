import Style from './style';
import service from '../../../service';
import { Col, Row } from 'antd';
import colors from '../../../utils/colors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Dispatcher } from '../../../store/dispathers';
import ProjectParamComponent from '../request-api-param';
import { ParamDto } from '../../../dtos/request/param.dto';
import { EndpointDto } from '../../../dtos/request/endpoint.dto';
import { ThemeColor } from '../../../store/reducers/theme.reducer';
import RequestApiResponseComponent from '../request-api-response';
import RequestApiButtonComponent from '../request-api-button';
import RequestApiIconComponent from '../request-api-icon';
import RequestApiTitleComponent from '../request-api-title';
import RequestApiMethodComponent from '../request-api-method';

interface RequestApiComponentProps {
  endpoint: EndpointDto;
}

const RequestApiComponent = (props: RequestApiComponentProps) => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState<ParamDto[]>([]);
  const [response, setResponse] = useState<any>({});

  const { endpoint } = props;
  const dispather = new Dispatcher(useDispatch());
  const { color }: { color: ThemeColor } = useSelector((state: any) => state.theme);
  const style = new Style(color, hover);

  const getParamsHandler = () => {
    const execute = async () => {
      const _params = await service.request.getParamsByEndpoint(endpoint.id);

      if (_params) setParams(_params);
    };

    if (endpoint?.id && !params.length) execute();
  };

  const executeHandler = () => {
    setLoading(true);

    const execute = async () => {
      const response: any = await service.request.execute(endpoint, params);
      setResponse(response);

      if (endpoint.path === `auth/signin/` || endpoint.path === `auth/signup/`)
        dispather.user.currentUserChange(response.data);

      if (endpoint.path === `auth/signout/`) dispather.user.currentUserExit();

      setLoading(false);
    };

    execute();
  };

  useEffect(getParamsHandler, [endpoint]);

  return (
    <Col
      key={endpoint.id}
      xs={{ span: 24 }}
      sm={{ span: 24 }}
      md={{ span: 12 }}
      lg={{ span: 12 }}
      xl={{ span: 12 }}
      xxl={{ span: 12 }}
      style={style.col}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Row style={style.row}>
        <RequestApiMethodComponent method={endpoint.method} setOpen={setOpen} />
        <RequestApiTitleComponent title={endpoint.path} setOpen={setOpen} />
        <RequestApiIconComponent open={open} setOpen={setOpen} />

        <Col span={24} hidden={!open} style={{ backgroundColor: colors[color][6] }}>
          <ProjectParamComponent params={params} setParams={setParams} />
          <RequestApiButtonComponent onclickHandler={executeHandler} loading={loading} />
          <RequestApiResponseComponent response={response} loading={loading} />
        </Col>
      </Row>
    </Col>
  );
};

export default RequestApiComponent;