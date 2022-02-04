import React, {ReactElement} from 'react';

interface IProps {}
interface IState {
  value: string;
}

export default class FlavorForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {value: 'coconut'};
  }

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState({value: event.currentTarget.value});
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const {value} = this.state;
    alert(`Your favorite flavor is: ${value}`);
  };

  render(): ReactElement {
    const {value} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="flavor">
          Pick your favorite flavor:
          {/*
          ================================================
          <select> accepts a 'value' attribute that you can use
          to implement a controlled component
          ================================================
          */}
          <select value={value} onChange={this.handleChange}>
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
