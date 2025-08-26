import { style, globalStyle } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const wrapper = style({
  display: 'grid',
  gap: theme.space.m,
  gridTemplateColumns: 'repeat(auto-fill, minmax(min(180px, 100%), 1fr))',
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
      '@media': {
        '(min-width: 960px)': {
          gridColumn: '1/7',
          gridRow: '3/12',
        },
      },
    },
    '&:nth-of-type(2)': {
      '@media': {
        '(min-width: 960px)': {
          gridColumn: '7/11',
          gridRow: '1/8',
        },
      },
    },
    '&:nth-of-type(3)': {
      '@media': {
        '(min-width: 960px)': {
          gridColumn: '11/17',
          gridRow: '2/8',
        },
      },
    },
    '&:nth-of-type(4)': {
      '@media': {
        '(min-width: 960px)': {
          gridColumn: '17/23',
          gridRow: '4/10',
        },
      },
    },
    '&:nth-of-type(5)': {
      '@media': {
        '(min-width: 960px)': {
          gridColumn: '7/13',
          gridRow: '8/14',
        },
      },
    },
    '&:nth-of-type(6)': {
      '@media': {
        '(min-width: 960px)': {
          gridColumn: '13/17',
          gridRow: '8/15',
        },
      },
    },
  },
});

globalStyle(`${item} > *`, {
  borderRadius: theme.borderRadius.m,
  '@media': {
    '(min-width: 960px)': {
      position: 'absolute',
      inset: '50% 0',
      translate: '0 -50%',
    },
  },
});
