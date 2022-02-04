import {ReactElement} from 'react';
import EssayForm from './EssayForm';
import FileForm from './FileForm';
import FlavorForm from './FlavorForm';
import NameForm from './NameForm';

const container = {
  nameTextHolder: 'Your name...',
};
export default function App(): ReactElement {
  return (
    <div>
      <NameForm textHolder={container.nameTextHolder} />
      <EssayForm />
      <FlavorForm />
      <FileForm />
    </div>
  );
}
