import { Input, Row } from 'antd';
import { useSelector } from 'react-redux';
import colors from 'utils/colors';
import { PortifolioState } from 'store/reducers';
import { ParamDto } from 'dtos/request/param.dto';
import { Dispatch, SetStateAction } from 'react';

interface RequestApiInputProps {
  param: ParamDto;
  setParam: Dispatch<SetStateAction<ParamDto[]>>;
}

const RequestApiInput = (props: RequestApiInputProps) => {
  const { id, value, type, key } = props.param;

  const {
    theme: { color },
  } = useSelector((state: PortifolioState) => state);

  const saveParamHandler = (_value: string) => {
    const handler = (param: ParamDto) => {
      if (param.id == id) {
        return { ...param, value: _value };
      }
      return param;
    };
    props.setParam((params) => params.map(handler));
  };

  return (
    <Row key={id} style={{ padding: '5px' }}>
      <Input
        value={value}
        onChange={(event) => saveParamHandler(event.target.value)}
        placeholder={'@' + type + ': ' + key}
        size="small"
        style={{
          backgroundColor: colors[color][5],
          border: '0px',
          height: '100%',
          width: '100%',
          color: colors[color][2],
        }}
      />
    </Row>
  );
};

export default RequestApiInput;
