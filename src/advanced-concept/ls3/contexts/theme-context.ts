import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export type ThemeStyleCtxType = {
  foreground: string;
  background: string;
};
export type ToggleThemeCtxType = () => void | null;

export const ThemeStyleCtx = React.createContext<ThemeStyleCtxType>(
  themes.dark // default value
);
export const ToggleThemeCtx = React.createContext<ToggleThemeCtxType>(
  () => null // default value
);
