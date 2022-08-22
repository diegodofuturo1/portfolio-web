import { PropsWithChildren } from 'react';

interface IfProps {
  check: boolean;
}

const If = (props: PropsWithChildren<IfProps>) => {
  return props.check ? (props.children as JSX.Element) : <span></span>;
};

export default If;
