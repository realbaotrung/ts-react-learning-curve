type Props = {
  left: JSX.Element;
  right: JSX.Element;
};

export default function SplitPane(props: Props): JSX.Element {
  const {left, right} = props;
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{left}</div>
      <div className="SplitPane-right">{right}</div>
    </div>
  );
}
