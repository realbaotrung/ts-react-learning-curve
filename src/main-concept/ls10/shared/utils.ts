/**
 * This function converts Fahrenheit degree to Celsius degree
 * @param fahrenheit
 */
export function toCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

/**
 * This function converts Celsius degree to Fahrenheit degree
 * @param celsius
 */
export function toFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

/**
 * This function takes an input (number), and a callback function
 * then convert to a desired temperature.
 * @param temperature that user want to convert.
 * @param convertFn the callback function (like toCelsius or toFahrenheit).
 * @return A desired rounded temperature of type string.
 */
export function tryConvert(
  temperature: string,
  convertFn: (value: number) => number
): string {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convertFn(input);
  const rounded = Math.round(output * 1000) / 1000;

  return rounded.toString();
}
