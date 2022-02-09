import React, {useState} from 'react';

export default function EssayForm(): JSX.Element {
  const [text, setText] = useState('Your essay here...');

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
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
      <label htmlFor="essay">
        Essay:
        <div>
          {/*
            ================================================
            <textarea> accepts a 'value' attribute that you can use
            to implement a controlled component
            ================================================
            */}
          <textarea value={text} onChange={handleTextAreaChange} />
        </div>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
