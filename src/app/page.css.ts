import { style } from '@vanilla-extract/css';
import { theme } from '../utils/theme.css';

export const grid = style({
  display: 'grid',
  gap: theme.space.l,
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  alignItems: 'center',
  width: '100%',
  paddingTop: '32px',
  paddingBottom: '32px',
  paddingLeft: '16px',
  paddingRight: '16px',
  marginBottom: '32px',
  '@media': {
    '(min-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      paddingLeft: '32px',
      paddingRight: '32px',
      borderRadius: '16px',
      marginBottom: '64px',
    },
    '(min-width: 1024px)': {
      marginBottom: '128px',
    },
  },
  selectors: {
    '.dark &': {
      backgroundColor: '#2c3442',
    },
    '.light &': {
      backgroundColor: '#edf2f7',
    },
  },
});

export const altGrid = style({
  display: 'grid',
  gap: theme.space.l,
  gridTemplateColumns: 'repeat(auto-fit, minmax(64px, auto))',
  alignItems: 'center',
  maxWidth: '1280px',
  margin: '0 auto',
  padding: theme.space.xl,
});

export const plainGrid = style({
  width: '100%',
  maxWidth: '960px',
  margin: `${theme.space.xl} auto`,
});

export const segment = style({
  padding: '0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: 'min(100vh, 768px)',
  '@media': {
    '(min-width: 768px)': {
      padding: '0 16px',
    },
  },
});

export const mainSegment = style([
  segment,
  {
    minHeight: 'calc(100vh - 72px)',
    paddingBottom: '72px',
    alignItems: 'center',
    maxWidth: '960px',
    margin: '0 auto',
  },
]);

export const smallText = style({
  marginBottom: '8px',
  textTransform: 'uppercase',
  fontSize: '14px',
  selectors: {
    '.light &': { color: '#243343' },
    '.dark &': { color: 'inherit' },
  },
});

export const text = style({
  marginTop: '8px',
});

export const outLink = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  textDecoration: 'none',
  color: 'inherit',
});

export const socialIcon = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.space.s,
  padding: '0.5rem',
  borderRadius: '0.375rem',
  backgroundColor: 'rgba(0, 0, 0, 0.04)',
});

export const portrait = style({
  borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
  boxShadow: '5px 25px 40px rgba(0, 0, 0, 0.2)',
});
