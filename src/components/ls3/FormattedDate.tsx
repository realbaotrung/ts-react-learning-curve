import React, {ReactElement} from 'react';

type Props = {
  timer: Date;
};
export function FormattedDate(props: Props): ReactElement {
  const {timer} = props;
  return <h2>It is {timer.toLocaleTimeString()}</h2>;
}
