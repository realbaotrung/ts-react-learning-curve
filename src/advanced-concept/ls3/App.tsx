/**
 * CONTEXT PROVIDES A WAY TO PASS DATA THROUGH THE COMPONENT TREE
 * without having to pass props down manually at every level.
 */

import {useCallback, useEffect, useRef, useState} from 'react';
import {
  ThemeStyleCtx,
  themes,
  ThemeStyleCtxType,
  ToggleThemeCtx,
} from './contexts/theme-context';
import ThemedButton from './Toolbar/themed-button';
import Section from './Section';
import Page from './Page';
import Toolbar from './Toolbar/Toolbar';
import ThemeTogglerButton from './Toolbar/theme-toggler-button';

function useCountRender(): number {
  const count = useRef<number>(0);
  useEffect(() => {
    count.current += 1;
  }, []);
  return count.current;
}

export default function App(): JSX.Element {
  const countRenders = useCountRender();
  const [themeStyle, setThemeStyle] = useState<ThemeStyleCtxType>(themes.light);

  useEffect(() => {
    document.body.style.background = themeStyle.background;
  }, [themeStyle]);

  /**
   * 'useCallback' is applied when use with 'useContext'
   */
  const toggleTheme = useCallback((): void => {
    const theme = themeStyle === themes.dark ? themes.light : themes.dark;
    setThemeStyle(theme);
  }, [themeStyle]);

  const handleChangeBodyBackground = (): void => {
    // eslint-disable-next-line no-alert
    alert(`Body has change to ${themeStyle.background} color.`);
  };

  return (
    <Page>
      <h1>Render: {countRenders} times</h1>
      <ThemeStyleCtx.Provider value={themeStyle}>
        <Toolbar changeTheme={toggleTheme} />
      </ThemeStyleCtx.Provider>
      <Section>
        <ThemedButton onClick={handleChangeBodyBackground}>
          Change Body Background
        </ThemedButton>
      </Section>
      <Section>
        <ThemeStyleCtx.Provider value={themeStyle}>
          <ToggleThemeCtx.Provider value={toggleTheme}>
            <ThemeTogglerButton>ThemeStyle Toggle Button</ThemeTogglerButton>
          </ToggleThemeCtx.Provider>
        </ThemeStyleCtx.Provider>
      </Section>
    </Page>
  );
}
