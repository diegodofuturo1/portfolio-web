import { Col, Row } from 'antd';
import colors from '../../../utils/colors';
import ProjectInput from '../request-api-input';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatcher } from '../../../store/dispathers';
import { ParamDto } from '../../../dtos/request/param.dto';
import { ThemeColor } from '../../../store/reducers/theme.reducer';
import { Dispatch, SetStateAction } from 'react';

interface RequestApiParamComponentProps {
  params: ParamDto[];
  setParams: Dispatch<SetStateAction<ParamDto[]>>;
}

const RequestApiParamComponent = (props: RequestApiParamComponentProps) => {
  const { params } = props;

  const { color }: { color: ThemeColor } = useSelector((state: any) => state.theme);

  return (
    <>
      {params && params.length ? (
        <Col>
          <Row style={{ padding: `5px 5px 0px 5px`, color: colors[color][3] }}>Parâmetros:</Row>
          {params.map((param) => (
            <ProjectInput param={param} setParam={props.setParams} key={param.key} />
          ))}
        </Col>
      ) : (
        <Row align="middle" justify="center" style={{ padding: '10px', color: colors[color][3] }}>
          Nenhum parâmetro
        </Row>
      )}
    </>
  );
};

export default RequestApiParamComponent;
