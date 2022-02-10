import React from 'react';

type Props = {
  color: string;
  children: React.ReactNode;
};

export default function FancyBorder(props: Props): JSX.Element {
  const {color, children} = props;
  return <div className={`FancyBorder FancyBorder-${color}`}>{children}</div>;
}
