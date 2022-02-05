type Props = {
  celsius: number;
};

export default function BoilingVerdict(props: Props): JSX.Element {
  const {celsius} = props;
  return (
    <div>
      {celsius >= 100 ? (
        <p>The water would boil.</p>
      ) : (
        <p>The water would not boil.</p>
      )}
    </div>
  );
}
