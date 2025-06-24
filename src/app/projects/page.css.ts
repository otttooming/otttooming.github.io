import { style } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const heading = style({
  marginTop: '80px',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '960px',
  padding: '0 16px',
  fontWeight: theme.fontWeight.normal,
});

export const description = style({
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '960px',
  padding: '0 16px',
});

export const descriptionWithMargin = style([
  description,
  {
    marginTop: theme.space.l,
  },
]);

export const projectList = style({
  margin: '80px auto',
  padding: 0,
  maxWidth: '1080px',
  '@media': {
    '(min-width: 768px)': {
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },
});

export const projectTitle = style({
  marginTop: theme.space.s,
  fontWeight: theme.fontWeight.normal,
});
