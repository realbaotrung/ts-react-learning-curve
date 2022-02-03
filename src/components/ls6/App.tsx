import {ReactElement} from 'react';
import NumberList from './NumberList';

const numbers = Array.from({length: 10}, (_, index) => index + 1);

export default function App(): ReactElement {
  return <NumberList numbers={numbers} />;
}
