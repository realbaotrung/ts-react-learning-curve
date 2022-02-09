import React, {useState} from 'react';

type Props = {
  textHolder: string;
};

export default function NameForm(props: Props): JSX.Element {
  const {textHolder} = props;
  const [text, setText] = useState('');

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setText(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    alert(`A name was submitted: ${text}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          value={text}
          onChange={handleInputChange}
          placeholder={textHolder}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
