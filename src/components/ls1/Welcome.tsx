type Props = {
  name: string;
};

export default function Welcome(props: Props): JSX.Element {
  const {name} = props;
  return <h1>Hello, {name}</h1>;
}
