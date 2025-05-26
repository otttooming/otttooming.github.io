import { style, globalStyle } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const wrapper = style({
  display: 'grid',
  alignItems: 'stretch',
  gap: '16px',
  width: '100%',
  maxWidth: '960px',
  margin: '0 auto',
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

export const itemContainer = style({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.borderRadius.m,
});

globalStyle(`${itemContainer} > *`, {
  borderRadius: theme.borderRadius.m,
  position: 'relative',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  flex: 1,
});
