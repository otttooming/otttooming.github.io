import { createVar, style } from '@vanilla-extract/css';

export const backgroundColorVar = createVar();

export const root = style({
  vars: {
    [backgroundColorVar]: '#e8eaee',
  },
  background: backgroundColorVar,
  selectors: {
    '&[data-theme="dark"]': {
      vars: {
        [backgroundColorVar]: '#1a2332',
      },
    },
  },
});
