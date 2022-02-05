import React from 'react';

type Props = {
  timer: Date;
};
export function FormattedDate(props: Props): JSX.Element {
  const {timer} = props;
  return <h2>It is {timer.toLocaleTimeString()}</h2>;
}
