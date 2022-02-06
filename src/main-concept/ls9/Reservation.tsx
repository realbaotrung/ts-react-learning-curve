import React from 'react';

// Represent an empty object
type Props = Record<string, never>;
type State = {
  isGoing: boolean;
  numberOfGuests: number;
};

export default class Reservation extends React.Component<Props, State> {
  constructor(public props: Props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };
  }

  /**
   * https://www.w3schools.com/tags/tag_input.asp
   * see more <input type="..." />
   * @param event
   */
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const target = event.currentTarget;

    let value: boolean | number;
    if (target.name === 'isGoing' && target.type === 'checkbox') {
      value = target.checked;
      this.setState({
        isGoing: value,
      });
    }
    if (target.name === 'numberOfGuests' && target.type === 'number') {
      value = Number(target.value);
      this.setState({
        numberOfGuests: value,
      });
    }
  };

  render(): JSX.Element {
    const {isGoing, numberOfGuests} = this.state;
    return (
      <form>
        <label htmlFor="isGoing">
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label htmlFor="numberOfGuests">
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}
