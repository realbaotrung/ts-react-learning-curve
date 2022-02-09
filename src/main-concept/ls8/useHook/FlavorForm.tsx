import React, {useState} from 'react';

export default function FlavorFrom(): JSX.Element {
  const [value, setValue] = useState('coconut');

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setValue(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    alert(`Your favorite flavor is: ${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="flavor">
        Pick your favorite flavor:
        {/*
          ================================================
          <select> accepts a 'value' attribute that you
          can use to implement a controlled component
          ================================================
          */}
        <select value={value} onChange={handleSelectChange}>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
