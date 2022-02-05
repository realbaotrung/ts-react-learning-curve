type Props = {
  value: number;
};

export default function ListItem(props: Props): JSX.Element {
  const {value} = props;
  return <li>{value}</li>;
}
