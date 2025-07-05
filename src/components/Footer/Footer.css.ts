import { style } from '@vanilla-extract/css';

export const footer = style({
  maxWidth: '960px',
  marginTop: '80px',
  marginBottom: '40px',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
});

export const copyright = style({
  marginRight: '8px',
  transform: 'rotate(180deg)',
  display: 'inline-block',
});
