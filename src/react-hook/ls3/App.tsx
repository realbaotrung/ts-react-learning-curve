import {useState} from 'react';

function ExampleWithManyState(): JSX.Element {
  // Declare multiple variables
  const [age, setAge] = useState<number>(42);
  const [fruit, setFruit] = useState<string>('banana');
  const [isChange, setIsChange] = useState<boolean>(false);

  const handleAgeClick = (): void => {
    setIsChange(!isChange);
    setAge(age + 1);
  };
  const handleFruitClick = (): void => {
    setIsChange(!isChange);
    setAge(age - 1);
    if (isChange) {
      setFruit('dimgray');
    } else {
      setFruit('orange');
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={age}
          style={{color: isChange ? 'red' : 'green'}}
        />
        <button type="button" onClick={handleAgeClick}>
          Increase Age
        </button>
      </div>
      <div>
        <input
          type="text"
          value={fruit}
          style={{backgroundColor: isChange ? 'dimgray' : 'orange'}}
        />
        <button type="button" onClick={handleFruitClick}>
          Change fruit
        </button>
      </div>
    </div>
  );
}

export default function App(): JSX.Element {
  return <ExampleWithManyState />;
}
