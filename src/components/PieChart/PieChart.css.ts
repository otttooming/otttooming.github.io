import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { theme } from '../../utils/theme.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '64px',
  marginTop: '64px',
  background: theme.backgroundColor.secondary,
  borderRadius: theme.borderRadius.m,
  padding: '32px',
  maxWidth: '1024px',
});

export const pieWrapper = style({
  display: 'inline-flex',
  borderRadius: theme.borderRadius.m,
  marginTop: '24px',
});

export const list = style({
  textAlign: 'center',
  padding: 0,
  margin: 0,
});

export const listItem = recipe({
  base: {
    display: 'inline-flex',
    marginLeft: '24px',
    marginTop: '16px',
    paddingLeft: '24px',
    position: 'relative',
    color: theme.textColor.primary,
    selectors: {
      '&:first-of-type': {
        marginLeft: 0,
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: 0,
        width: '16px',
        height: '16px',
      },
    },
  },
  variants: {
    colorIndex: {
      0: { selectors: { '&::before': { backgroundColor: '#80CC8E' } } },
      1: { selectors: { '&::before': { backgroundColor: '#686AF6' } } },
      2: { selectors: { '&::before': { backgroundColor: '#C5C7F0' } } },
      3: { selectors: { '&::before': { backgroundColor: '#CFD2F0' } } },
      4: { selectors: { '&::before': { backgroundColor: '#DADDEF' } } },
    },
  },
});

export const infoWrapper = style({
  fontSize: theme.fontSize.xs,
  marginTop: '24px',
  color: '#808080',
});
