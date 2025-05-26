import { style } from '@vanilla-extract/css';

export const scrollContainer = style({
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    width: '0px',
  },
});
