import { style } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const tagList = style({
  margin: `${theme.space.m} auto`,
  padding: 0,
});

export const tagListItem = style({
  listStyleType: 'none',
  display: 'inline-flex',
});
