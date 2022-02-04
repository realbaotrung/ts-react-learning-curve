import {ReactElement} from 'react';

type Props = {
  warn: boolean;
};

export default function WarningBanner(props: Props): ReactElement | null {
  const {warn} = props;

  if (!warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}
