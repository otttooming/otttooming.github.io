import { style } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const heading = style({
  marginTop: '80px',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '960px',
  padding: '0 16px',
});

export const description = style({
  marginTop: theme.space.l,
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '960px',
  padding: '0 16px',
});

export const cardList = style({
  margin: '80px auto',
  padding: 0,
  maxWidth: '1080px',
  '@media': {
    '(min-width: 768px)': {
      padding: '0 16px',
    },
  },
});
