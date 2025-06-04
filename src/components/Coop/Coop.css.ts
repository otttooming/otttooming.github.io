import { style } from '@vanilla-extract/css';

export const companyList = style({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row-reverse',
  flexWrap: 'wrap',
  listStyleType: 'none',
  marginTop: '64px',
});

export const companyLink = style({
  height: '128px',
  margin: '0 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const card = style({
  width: '200px',
  maxHeight: '100%',
});
