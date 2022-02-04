import React, {ReactElement} from 'react';
import autoBindReact from 'auto-bind/react';
import {FormattedDate} from './FormattedDate';

// Represent an empty object
type Props = Record<string, never>;
type State = {
  date: Date;
};

class Clock extends React.Component<Props, State> {
  private timerID!: NodeJS.Timer;

  constructor(public props: Props) {
    super(props);
    this.state = {date: new Date()};
    autoBindReact(this);
  }

  /**
   * ===================================
   * Adding LifeCycle Methods to a Class
   *
   * In application with many components, it's very
   * important to free up resources taken by the
   * component when they are destroyed.
   * ===================================
   * - First-
   * We want to 'setup a timer' whenever the 'Clock' is rendered
   * to the DOM for the first time.
   * This is called "mounting" in React.
   *
   * "componentDidMount()" runs after the component output
   * has been rendered to the DOM
   */
  public componentDidMount(): void {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  /**
   * - Second -
   * We want to 'clear that timer' whenever the DOM produced by
   * the 'Clock' is removed.
   * This is called "un-mounting" in React
   */
  public componentWillUnmount(): void {
    clearInterval(this.timerID);
  }

  private tick(): void {
    this.setState(() => ({
      date: new Date(),
    }));
  }

  public render(): ReactElement {
    const {date} = this.state;
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate timer={date} />
      </div>
    );
  }
}

export default Clock;
