import { Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from 'store/reducers';
import { Dispatcher } from 'store/dispathers';
import service from 'service';
import { useEffect } from 'react';
import LoadingComponent from 'components/loading';
import RequestApiComponent from '../request-api';

interface RequestApiListComponentProps {}

const RequestApiListComponent = (props: RequestApiListComponentProps) => {
  const dispatcher = new Dispatcher(useDispatch());
  const {
    request: { endpoints },
  } = useSelector((state: ApplicationState) => state);

  const getEndpointsHandler = () => {
    const execute = async () => {
      const _endpoints = await service.request.getEndpoints();

      if (_endpoints) dispatcher.request.saveEndpoints(_endpoints);
    };

    if (!endpoints || !endpoints.length) {
      execute();
    }
  };

  useEffect(getEndpointsHandler, []);

  return (
    <Row>
      {endpoints && endpoints.length ? (
        endpoints.map((endpoint) => <RequestApiComponent key={endpoint.id} endpoint={endpoint} />)
      ) : (
        <LoadingComponent />
      )}
    </Row>
  );
};

export default RequestApiListComponent;
