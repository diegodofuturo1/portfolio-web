import { ReactNode } from 'react';

interface ForeachProps<T> {
  dataSource: T[];
  map: (data: T, index: number) => ReactNode;
}

const Foreach = (props: ForeachProps<any>) => {
  return <>{props.dataSource.map(props.map)}</>;
};

export default Foreach;
