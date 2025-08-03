import { style } from '@vanilla-extract/css';
import { theme } from '../utils/theme.css';

export const header = style({
  display: 'flex',
  alignSelf: 'center',
  justifyContent: 'space-between',
  maxWidth: '960px',
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
  gap: theme.space.l,
});

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  height: theme.space.xxl,
  lineHeight: theme.space.xxl,
  gap: '8px',
  padding: '0 16px',
  backgroundColor: 'transparent',
  borderRadius: '8px',
  fontSize: theme.fontSize.m,
  fontWeight: theme.fontWeight.semiBold,
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
});
