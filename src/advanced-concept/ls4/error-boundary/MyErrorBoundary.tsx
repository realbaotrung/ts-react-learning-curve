/**
 * Custom Error boundary component
 */
import React, {ReactNode} from 'react';

type Props = {
  children: React.ReactNode;
};
type State = {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
};

export default class MyErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    error: null,
    errorInfo: null,
  };

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      error,
      errorInfo,
    });
  }

  public render(): JSX.Element | ReactNode {
    const {children} = this.props;
    const {error, errorInfo} = this.state;

    if (errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{whiteSpace: 'pre-wrap'}}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // just render children
    return children;
  }
}

/*
eslint
  @typescript-eslint/no-unused-vars: "off",
  no-console: "off",
  react/state-in-constructor: "off"
*/
