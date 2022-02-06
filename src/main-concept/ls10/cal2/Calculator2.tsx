import React from 'react';
import TemperatureInput from './TemperatureInput';
import {toCelsius, toFahrenheit, tryConvert} from '../shared/utils';
import BoilingVerdict from '../cal1/BoilingVerdict';

/**
 * In React, sharing state is accomplished by moving it up to
 * the closest common ancestor of the components that need it.
 * This is called “lifting state up”.
 */
type Props = Record<string, never>;
type State = {
  temperature: string;
  scale: string;
};

export default class Calculator2 extends React.Component<Props, State> {
  constructor(public props: Props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c',
    };
  }

  handleCelsiusChange = (temperature: string): void => {
    this.setState({scale: 'c', temperature});
  };

  handleFahrenheitChange = (temperature: string): void => {
    this.setState({scale: 'f', temperature});
  };

  render(): JSX.Element {
    const {scale, temperature} = this.state;
    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
