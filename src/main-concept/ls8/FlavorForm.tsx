import React from 'react';

// Represent an empty object
type Props = Record<string, never>;
type State = {
  value: string;
};

export default class FlavorForm extends React.Component<Props, State> {
  constructor(public props: Props) {
    super(props);
    this.state = {value: 'coconut'};
  }

  handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState({value: event.currentTarget.value});
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const {value} = this.state;
    // eslint-disable-next-line no-alert
    alert(`Your favorite flavor is: ${value}`);
  };

  render(): JSX.Element {
    const {value} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="flavor">
          Pick your favorite flavor:
          {/*
          ================================================
          <select> accepts a 'value' attribute that you
          can use to implement a controlled component
          ================================================
          */}
          <select value={value} onChange={this.handleSelectChange}>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
