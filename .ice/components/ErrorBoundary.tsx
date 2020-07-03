// reference： https://github.com/bvaughn/react-error-boundary
/* eslint @typescript-eslint/explicit-member-accessibility:0 */
import * as React from 'react';
import ErrorBoundaryFallback from './ErrorBoundaryFallback';

interface IProps {
  children?: React.ReactNode;
  Fallback?: React.ComponentType<any>;
  onError?: Function;
}

interface IErrorInfo {
  componentStack: string;
}

interface IState {
  error?: Error;
  info?: IErrorInfo;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  static defaultProps: IProps = {
    Fallback: ErrorBoundaryFallback,
  };

  state = {
    error: null,
    info: null,
  };

  componentDidCatch(error: Error, info: IErrorInfo): void {
    const { onError } = this.props;

    if (typeof onError === 'function') {
      try {
        // istanbul ignore next: Ignoring ternary; can’t reproduce missing info in test environment.
        onError.call(this, error, info ? info.componentStack : '');
      } catch (ignoredError) {
        // ignored error
      }
    }

    // Update state so the next render will show the fallback UI.
    this.setState({ error, info });
  }

  render() {
    const { children, Fallback } = this.props;
    const { error, info } = this.state;

    // render fallback UI if there is error
    if (error !== null) {
      return (
        <Fallback
          componentStack={
            // istanbul ignore next: Ignoring ternary; can’t reproduce missing info in test environment.
            info ? info.componentStack : ''
          }
          error={error}
        />
      );
    }

    return children || null;
  }
}

export default ErrorBoundary;
