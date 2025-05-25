import { style, globalStyle } from '@vanilla-extract/css';

export const wrapper = style({
  marginTop: '80px',
  marginBottom: '80px',
});

globalStyle(`${wrapper} > *`, {
  maxWidth: '960px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '16px',
  paddingRight: '16px',
});
