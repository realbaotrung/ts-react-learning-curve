import React, {useState} from 'react';
import BoilingVerdict from './BoilingVerdict';

export default function Calculator1(): JSX.Element {
  const [temperature, setTemperature] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTemperature(event.currentTarget.value);
  };

  return (
    <fieldset>
      <legend>Enter temperature in Celsius:</legend>
      <input type="text" value={temperature} onChange={handleChange} />
      <BoilingVerdict celsius={parseFloat(temperature)} />
    </fieldset>
  );
}
