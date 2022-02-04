import {ReactElement} from 'react';

type Props = {
  name: string;
};

export default function Welcome(props: Props): ReactElement {
  const {name} = props;
  return <h1>Hello, {name}</h1>;
}
