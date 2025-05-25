import { style } from '@vanilla-extract/css';
import { theme } from '../utils/theme.css';

export const header = style({
  display: 'flex',
  alignSelf: 'center',
  justifyContent: 'space-between',
  maxWidth: '1024px',
  margin: '0 auto',
  paddingTop: theme.space.l,
  paddingBottom: theme.space.l,
  paddingLeft: theme.space.s,
  paddingRight: theme.space.s,
  '@media': {
    '(min-width: 768px)': {
      paddingLeft: theme.space.l,
      paddingRight: theme.space.l,
    },
  },
  overflow: 'scroll hidden',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    width: '0px',
  },
});
