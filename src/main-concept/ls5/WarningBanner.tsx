type Props = {
  warn: boolean;
};

export default function WarningBanner(props: Props): JSX.Element | null {
  const {warn} = props;

  if (!warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}
