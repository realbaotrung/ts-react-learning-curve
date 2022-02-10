import React, {useState} from 'react';

function useInputChange(): [
  boolean,
  number,
  (event: React.ChangeEvent<HTMLInputElement>) => void
] {
  const [isGoing, setIsGoing] = useState<boolean>(true);
  const [numberOfGuests, setNumberOfGuests] = useState<number>(0);
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const target = event.currentTarget;

    let value: boolean | number;
    if (target.name === 'isGoing' && target.type === 'checkbox') {
      value = target.checked;
      setIsGoing(value);
    }
    if (target.name === 'numberOfGuests' && target.type === 'number') {
      value = Number(target.value);
      setNumberOfGuests(value);
    }
  };

  return [isGoing, numberOfGuests, handleInputChange];
}

export default function Reservation(): JSX.Element {
  const [isGoing, numberOfGuests, handleInputChange] = useInputChange();
  return (
    <form>
      <label htmlFor="isGoing">
        Is going:
        <input
          name="isGoing"
          type="checkbox"
          checked={isGoing}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="numberOfGuests">
        Number of guests:
        <input
          name="numberOfGuests"
          type="number"
          value={numberOfGuests}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
}
