import { style } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const heading2 = style({
  fontSize: theme.fontSize.xl,
  marginTop: '32px',
  fontWeight: theme.fontWeight.semiBold,
});

export const heading3 = style({
  fontSize: theme.fontSize.xxl,
  marginTop: '32px',
  fontWeight: theme.fontWeight.semiBold,
});

export const link = style({
  display: 'inline-flex',
  alignItems: 'center',
  verticalAlign: 'middle',
  color: theme.color.primary,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const externalIcon = style({
  marginLeft: '4px',
  marginRight: '2px',
  display: 'inline-flex',
});

export const list = style({
  listStyleType: 'disc',
  paddingLeft: '32px',
  marginTop: '16px',
});

export const listItem = style({
  marginTop: '8px',
});

export const text = style({
  marginTop: '24px',
});
