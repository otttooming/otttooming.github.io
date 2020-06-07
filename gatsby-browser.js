import React from 'react';
import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  theme,
} from '@chakra-ui/core';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider value="light">
      <CSSReset />

      {element}
    </ColorModeProvider>
  </ThemeProvider>
);
