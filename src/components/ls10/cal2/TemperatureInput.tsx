import React from 'react';

const scaleNames: Record<string, string> = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

type Props = {
  scale: string;
  temperature: string;
  onTemperatureChange: (temp: string) => void;
};
// type State = {
//   temperature: string;
// };
type State = Record<string, never>;

export default class TemperatureInput extends React.Component<Props, State> {
  constructor(public props: Props) {
    super(props);
    // this.state = {temperature: ''};
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // this.setState({temperature: event.currentTarget.value});
    const {onTemperatureChange} = this.props;
    onTemperatureChange(event.currentTarget.value);
  };

  render(): JSX.Element {
    // const {temperature} = this.state;
    // const {scale} = this.props;
    const {temperature, scale} = this.props;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input type="text" value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
