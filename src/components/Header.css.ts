import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../utils/theme.css';

export const navList = style({
  maxWidth: '960px',
  margin: '0 auto',
  paddingTop: theme.space.l,
  paddingBottom: theme.space.l,
  paddingLeft: theme.space.s,
  paddingRight: theme.space.s,

  display: 'flex',
  gap: theme.space.l,
  justifyContent: 'flex-end',
});

globalStyle(`${navList} > :first-child`, {
  marginRight: 'auto',
});

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  height: theme.space.xxl,
  lineHeight: theme.space.xxl,
  gap: '8px',
  padding: '0 16px',
  backgroundColor: 'transparent',
  borderRadius: theme.borderRadius.s,
  fontSize: theme.fontSize.m,
  fontWeight: theme.fontWeight.semiBold,
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
});

export const text = style({
  '@media': {
    '(width <= 960px)': {
      display: 'none',
    },
  },
});
