import React, {ReactElement} from 'react';
import BoilingVerdict from './BoilingVerdict';

type Props = Record<string, never>;
type State = {
  temperature: string;
};

export default class Calculator1 extends React.Component<Props, State> {
  constructor(public props: Props) {
    super(props);
    this.state = {temperature: ''};
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({temperature: event.currentTarget.value});
  };

  render(): ReactElement {
    const {temperature} = this.state;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input type="text" value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}
