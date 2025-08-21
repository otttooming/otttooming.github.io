import { style } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const card = style({
  display: 'grid',
  gridTemplateColumns: '0 1fr 0',
  gridTemplateRows: 'auto 8em 1fr auto',
  position: 'relative',
  '::before': {
    content: '""',
    gridColumn: '1/-1',
    gridRow: '1/3',
    borderRadius: 0,
    background: 'var(--card-background)',
  },
  '@media': {
    '(min-width: 768px)': {
      gridTemplateColumns: '64px 1fr 64px',
      '::before': {
        borderRadius: theme.borderRadius.m,
      },
    },
  },
});

export const header = style({
  gridColumn: '1 / 4',
  gridRow: '1 / 2',
  color: '#fff',
  height: '320px',
  display: 'flex',
  alignItems: 'center',
  overflow: 'scroll hidden',
});

export const scrollContainer = style({
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    width: '0px',
  },
});

export const illustrationWrapper = style({
  maxWidth: '96px',
  width: '100%',
  marginLeft: '96px',
  marginRight: '64px',
});

export const illustration = style({
  width: '100%',
  height: 'auto',
});

export const projectsContainer = style({
  width: '100%',
  height: '100%',
  position: 'relative',
});

export const projectsList = style({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
});

export const projectItem = style({
  minWidth: '320px',
  marginRight: '16px',
});

export const content = style({
  gridRow: '2 / 4',
  gridColumn: '2 / 3',
  paddingTop: '32px',
  paddingBottom: '32px',
  paddingLeft: '16px',
  paddingRight: '16px',
  backgroundColor: 'light-dark(#edf2f7, #2c3442)',
  '@media': {
    '(min-width: 768px)': {
      paddingLeft: '32px',
      paddingRight: '32px',
      borderRadius: theme.borderRadius.m,
    },
  },
});
