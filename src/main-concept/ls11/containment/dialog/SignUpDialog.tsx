import React from 'react';
import Dialog from './Dialog';

type Props = Record<string, never>;
type State = {
  login: string;
};

export default class SignUpDialog extends React.Component<Props, State> {
  constructor(public props: Props) {
    super(props);
    this.state = {
      login: '',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({login: event.currentTarget.value});
  };

  handleSignUp = (): void => {
    const {login} = this.state;
    // eslint-disable-next-line no-alert
    alert(`Welcome aboard, ${login}`);
  };

  render(): JSX.Element {
    const {login} = this.state;
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?">
        <input type="text" value={login} onChange={this.handleChange} />
        <button type="button" onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }
}
