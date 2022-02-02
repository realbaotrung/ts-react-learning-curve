import React, {ReactElement} from 'react';

interface IProps {
  timer: Date;
}
export function FormattedDate(props: IProps): ReactElement {
  const {timer} = props;
  return <h2>It is {timer.toLocaleTimeString()}</h2>;
}
