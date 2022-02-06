import NumberList from './NumberList';

const numbers = Array.from({length: 10}, (_, index) => index + 1);

export default function App(): JSX.Element {
  return <NumberList numbers={numbers} />;
}
