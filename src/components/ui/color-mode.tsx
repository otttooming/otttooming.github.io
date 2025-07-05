'use client';

import { ThemeProvider, useTheme } from 'next-themes';
import { PropsWithChildren, useCallback } from 'react';

export function ColorModeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
      enableColorScheme
    >
      {children}
    </ThemeProvider>
  );
}

export function useColorMode() {
  const { setTheme } = useTheme();

  return useCallback(
    () => setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark')),
    [setTheme],
  );
}
