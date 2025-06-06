import { ThemeProvider, useTheme } from 'next-themes';
import { PropsWithChildren, useCallback, useMemo } from 'react';

export function ColorModeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleColorMode = useCallback(
    () => setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark')),
    [setTheme],
  );

  const colorMode = useMemo<'dark' | 'light'>(
    () => (resolvedTheme === 'dark' ? 'dark' : 'light'),
    [resolvedTheme],
  );

  return {
    colorMode,
    setColorMode: setTheme,
    toggleColorMode,
  };
}
