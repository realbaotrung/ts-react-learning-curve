import React from 'react';

// Represent an empty object
type Props = Record<string, never>;
type State = {
  text: string;
};

export default class EssayForm extends React.Component<Props, State> {
  constructor(public props: Props) {
    super(props);
    this.state = {
      text: 'Your essay here...',
    };
  }

  handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    this.setState({text: event.currentTarget.value});
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const {text} = this.state;
    // eslint-disable-next-line no-alert
    alert(`A name was submitted: ${text}`);
  };

  render(): JSX.Element {
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
            <textarea value={text} onChange={this.handleTextAreaChange} />
          </div>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
