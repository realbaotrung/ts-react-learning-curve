import {ReactElement} from 'react';

interface IProps {
  warn: boolean;
}

export default function WarningBanner(props: IProps): ReactElement | null {
  const {warn} = props;

  if (!warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}
