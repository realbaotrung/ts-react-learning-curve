import React from 'react';
import {
  ThemeStyleCtxType,
  ThemeStyleCtx,
  ToggleThemeCtx,
  ToggleThemeCtxType,
} from '../contexts/theme-context';

type Props = {
  children: React.ReactNode;
};

export default function ThemeTogglerButton(props: Props): JSX.Element {
  const {children} = props;
  const themeContext = React.useContext<ThemeStyleCtxType>(ThemeStyleCtx);
  const toggleCtx = React.useContext<ToggleThemeCtxType>(ToggleThemeCtx);

  return (
    <button
      type="button"
      onClick={toggleCtx}
      style={{
        backgroundColor: themeContext.background,
        color: themeContext.foreground,
      }}>
      {children}
    </button>
  );
}
