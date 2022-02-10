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

export default function TemperatureInput(props: Props): JSX.Element {
  const {scale, temperature, onTemperatureChange} = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onTemperatureChange(event.currentTarget.value);
  };
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input type="text" value={temperature} onChange={handleChange} />
    </fieldset>
  );
}
