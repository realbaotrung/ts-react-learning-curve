import React, {ReactElement} from 'react';

interface IProps {}
interface IState {
  text: string;
}

export default class EssayForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      text: 'Your essay here...',
    };
  }

  /** Typing on LEFT hand side of '=' */
  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.setState({text: event.currentTarget.value});
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const {text} = this.state;
    alert(`A name was submitted: ${text}`);
  };

  render(): ReactElement {
    const {text} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="essay">
          Essay:
          <div>
            {/*
            ================================================
            <textarea> accepts a 'value' attribute that you can use
            to implement a controlled component
            ================================================
            */}
            <textarea value={text} onChange={this.handleChange} />
          </div>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
