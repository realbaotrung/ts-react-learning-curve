import {ReactElement} from 'react';
import Welcome from './Welcome';

export default function App(): ReactElement {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
