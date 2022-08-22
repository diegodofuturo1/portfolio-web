import { ReactNode } from 'react';

interface SwitchProps {
  value: any;
  cases: any[];
  render: (data: any) => ReactNode;
}

const Switch = (props: SwitchProps) => {
  const filter = (_case: any) => _case === props.value;
  return props.cases.filter(filter).map(props.render);
};

export default Switch;
