import Columns from './Columns';

export default function Table(): JSX.Element {
  return (
    <table>
      <thead style={{fontWeight: '600', color: 'green'}}>
        <tr>
          <Columns />
        </tr>
      </thead>
      <tbody>
        <tr>
          <Columns />
        </tr>
      </tbody>
    </table>
  );
}
