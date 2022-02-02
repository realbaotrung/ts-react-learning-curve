import {ReactElement} from 'react';
import Clock from './Clock';

export default function App(): ReactElement {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}
