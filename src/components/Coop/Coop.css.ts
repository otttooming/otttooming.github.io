import { style } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const companyList = style({
  display: 'flex',
  flexDirection: 'row-reverse',
  flexWrap: 'wrap',
  placeContent: 'center',
  gap: theme.space.l,
});

export const companyLink = style({
  height: '128px',
  display: 'flex',
  placeItems: 'center',
});

export const logo = style({
  width: '200px',
});
