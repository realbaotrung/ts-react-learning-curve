import {ReactElement} from 'react';

type Props = {
  value: number;
};

export default function ListItem(props: Props): ReactElement {
  const {value} = props;
  return <li>{value}</li>;
}
