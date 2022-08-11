import { Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import RequestApiComponent from "../request-api";
import { PortifolioState } from "../../../store/reducers";
import { Dispatcher } from "../../../store/dispathers";
import service from "../../../service";
import { useEffect } from "react";

interface RequestApiListComponentProps {}

const RequestApiListComponent = (props: RequestApiListComponentProps) => {
  const dispatcher = new Dispatcher(useDispatch());
  const {
    request: { endpoints },
  } = useSelector((state: PortifolioState) => state);

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
      {endpoints
        ? endpoints.map((endpoint) => (
            <RequestApiComponent key={endpoint.id} endpoint={endpoint} />
          ))
        : []}
    </Row>
  );
};

export default RequestApiListComponent;
