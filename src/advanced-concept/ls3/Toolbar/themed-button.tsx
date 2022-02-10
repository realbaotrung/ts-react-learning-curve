import React from 'react';
import {ThemeStyleCtxType, ThemeStyleCtx} from '../contexts/theme-context';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export default function ThemedButton(props: Props): JSX.Element {
  const {onClick, children} = props;
  const themeContext = React.useContext<ThemeStyleCtxType>(ThemeStyleCtx);

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        backgroundColor: themeContext.background,
        color: themeContext.foreground,
      }}>
      {children}
    </button>
  );
}
