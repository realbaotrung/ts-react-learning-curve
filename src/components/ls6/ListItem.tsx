import {ReactElement} from 'react';

interface IProps {
  value: number;
}

export default function ListItem(props: IProps): ReactElement {
  const {value} = props;
  return <li>{value}</li>;
}
