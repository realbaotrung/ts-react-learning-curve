import React, {ReactElement} from 'react';

type Props = {
  textHolder: string;
};
type State = {
  text: string;
};

export default class NameForm extends React.Component<Props, State> {
  constructor(public props: Props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  /** Typing on LEFT-hand side of '=' */
  // handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  //   this.setState({text: event.currentTarget.value });
  // }

  /** Apply types to the event handler itself */
  /** Typing on RIGHT-hand side of '=' */
  handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({text: event.currentTarget.value});
  };

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();
    const {text} = this.state;
    alert(`A name was submitted: ${text}`);
  };

  render(): ReactElement {
    const {text} = this.state;
    const {textHolder} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            value={text}
            onChange={this.handleInputChange}
            placeholder={textHolder}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
