import React, {useState} from 'react';
import TemperatureInput from './TemperatureInput';
import {toCelsius, toFahrenheit, tryConvert} from '../../shared/utils';
import BoilingVerdict from '../cal1/BoilingVerdict';

/**
 * In React, sharing state is accomplished by moving it up to
 * the closest common ancestor of the components that need it.
 * This is called “lifting state up”.
 */

export default function Calculator2(): JSX.Element {
  const [temperature, setTemperature] = useState<string>('');
  const [scale, setScale] = useState<string>('c');

  const celsius =
    scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  const handleCelsiusChange = (temp: string): void => {
    setTemperature(temp);
    setScale('c');
  };

  const handleFahrenheitChange = (temp: string): void => {
    setTemperature(temp);
    setScale('f');
  };

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}
