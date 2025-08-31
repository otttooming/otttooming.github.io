import { style } from '@vanilla-extract/css';

export const link = style({
  display: 'inline-flex',
  alignItems: 'center',
  verticalAlign: 'middle',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const externalIcon = style({
  marginLeft: '4px',
  marginRight: '2px',
  display: 'inline-flex',
});
