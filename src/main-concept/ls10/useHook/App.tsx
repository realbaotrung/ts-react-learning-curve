import Calculator1 from './cal1/Calculator1';
import Calculator2 from './cal2/Calculator2';

export default function App(): JSX.Element {
  return (
    <div>
      <h2>Calculator #1</h2>
      <Calculator1 />
      <h2>Calculator #2</h2>
      <Calculator2 />
    </div>
  );
}
