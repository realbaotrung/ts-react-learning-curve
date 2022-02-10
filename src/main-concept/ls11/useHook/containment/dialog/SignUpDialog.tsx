import React, {useState} from 'react';
import Dialog from './Dialog';

export default function SignUpDialog(): JSX.Element {
  const [login, setLogin] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLogin(event.currentTarget.value);
  };

  const handleSignUp = (): void => {
    // eslint-disable-next-line no-alert
    alert(`Welcome aboard, ${login}`);
  };

  return (
    <Dialog
      title="Mars Exploration Program"
      message="How should we refer to you?">
      <input type="text" value={login} onChange={handleChange} />
      <button type="button" onClick={handleSignUp}>
        Sign Me Up!
      </button>
    </Dialog>
  );
}
