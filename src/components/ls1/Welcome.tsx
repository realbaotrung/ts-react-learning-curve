import {ReactElement} from 'react';

interface IProps {
  name: string;
}

export default function Welcome(props: IProps): ReactElement {
  const {name} = props;
  return <h1>Hello, {name}</h1>;
}
