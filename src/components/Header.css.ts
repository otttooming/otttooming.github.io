import { style } from '@vanilla-extract/css';
import { theme } from '../utils/theme.css';

export const header = style({
  display: 'flex',
  alignSelf: 'center',
  justifyContent: 'space-between',
  maxWidth: '1024px',
  margin: '0 auto',
  paddingTop: theme.space.l,
  paddingBottom: theme.space.l,
  paddingLeft: theme.space.s,
  paddingRight: theme.space.s,
  '@media': {
    '(min-width: 768px)': {
      paddingLeft: theme.space.l,
      paddingRight: theme.space.l,
    },
  },
  overflow: 'scroll hidden',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    width: '0px',
  },
});

export const navList = style({
  display: 'flex',
  margin: 0,
  padding: 0,
});

export const navItem = style({
  display: 'flex',
  alignSelf: 'center',
  listStyleType: 'none',
  marginLeft: '24px',
});

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 16px',
  border: 'none',
  backgroundColor: 'transparent',
  color: 'inherit',
  cursor: 'pointer',
  textDecoration: 'none',
  borderRadius: '8px',
  fontSize: theme.fontSize.m,
  fontWeight: theme.fontWeight.semiBold,
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  ':focus': {
    outline: 'none',
    boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
  },
});
