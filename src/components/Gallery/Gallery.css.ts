import { style, globalStyle } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const wrapper = style({
  display: 'grid',
  gap: theme.space.m,
  gridTemplateRows: 'repeat(14, minmax(24px, 1fr))',
  gridTemplateColumns: 'repeat(9, minmax(16px, 1fr))',
  '@media': {
    '(min-width: 960px)': {
      gridTemplateRows: 'repeat(14, minmax(16px, 1fr))',
      gridTemplateColumns: 'repeat(22, minmax(16px, 1fr))',
    },
  },
});

export const item = style({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: theme.borderRadius.m,
  selectors: {
    '&:first-of-type': {
      display: 'none',
      '@media': {
        '(min-width: 960px)': {
          display: 'block',
          gridColumn: '1/7',
          gridRow: '3/12',
        },
      },
    },
    '&:nth-of-type(2)': {
      gridColumn: '1/5',
      gridRow: '1/8',
      '@media': {
        '(min-width: 960px)': {
          gridColumn: '7/11',
        },
      },
    },
    '&:nth-of-type(3)': {
      gridColumn: '5/10',
      gridRow: '2/8',
      '@media': {
        '(min-width: 960px)': {
          gridColumn: '11/17',
        },
      },
    },
    '&:nth-of-type(4)': {
      display: 'none',
      '@media': {
        '(min-width: 960px)': {
          display: 'block',
          gridColumn: '17/23',
          gridRow: '4/10',
        },
      },
    },
    '&:nth-of-type(5)': {
      gridColumn: '1/6',
      gridRow: '8/14',
      '@media': {
        '(min-width: 960px)': {
          gridColumn: '7/13',
        },
      },
    },
    '&:nth-of-type(6)': {
      gridColumn: '6/10',
      gridRow: '8/15',
      '@media': {
        '(min-width: 960px)': {
          gridColumn: '13/17',
        },
      },
    },
  },
});

globalStyle(`${item} > *`, {
  borderRadius: theme.borderRadius.m,
  position: 'absolute',
  inset: '50% 0',
  translate: '0 -50%',
});
