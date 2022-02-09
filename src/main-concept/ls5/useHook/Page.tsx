import {useState} from 'react';
import WarningBanner from './WarningBanner';

// Represent an empty object
export default function Page(): JSX.Element {
  const [warning, setWarning] = useState(true);
  const handleToggleClick = (): void => {
    setWarning(!warning);
  };
  return (
    <div>
      <WarningBanner warn={warning} />
      <button type="button" onClick={handleToggleClick}>
        {warning ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}
