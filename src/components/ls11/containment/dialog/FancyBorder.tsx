import React from 'react';

type Props = {
  color: string;
  children: React.ReactNode;
};
type State = Record<string, never>;

// export default function FancyBorder(props: Props): JSX.Element {
//   const {color, children} = props;
//   return (
// <div className={`FancyBorder FancyBorder-${color}`}>{children}</div>
//  );
// }

export default class FancyBorder extends React.Component<Props, State> {
  constructor(public props: Props) {
    super(props);
  }

  render(): JSX.Element {
    const {color, children} = this.props;
    return <div className={`FancyBorder FancyBorder-${color}`}>{children}</div>;
  }
}
