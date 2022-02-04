import React, {ReactElement} from 'react';
import autoBindReact from 'auto-bind/react';
import WarningBanner from './WarningBanner';

// Represent an empty object
type Props = Record<string, never>;
type State = {
  showWarning: boolean;
};

class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {showWarning: true};
    autoBindReact(this);
  }

  handleToggleClick(): void {
    this.setState((prevState) => ({
      showWarning: !prevState.showWarning,
    }));
  }

  public render(): ReactElement {
    const {showWarning} = this.state;
    return (
      <div>
        <WarningBanner warn={showWarning} />
        <button type="button" onClick={this.handleToggleClick}>
          {showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export default Page;
