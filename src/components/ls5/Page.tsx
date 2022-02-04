import React, {ReactElement} from 'react';
import autoBindReact from 'auto-bind/react';
import WarningBanner from './WarningBanner';

interface IProps {}

interface IState {
  showWarning: boolean;
}

class Page extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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
