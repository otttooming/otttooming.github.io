import { style } from '@vanilla-extract/css';
import { theme } from '../utils/theme.css';

export const hero = style({
  display: 'grid',
  gap: theme.space.l,
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  alignItems: 'center',
  width: '100%',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  paddingLeft: 'clamp(1rem, 1rem + 4vw, 3rem)',
  paddingRight: 'clamp(1rem, 1rem + 4vw, 3rem)',
  backgroundColor: 'light-dark(#edf2f7, #2c3442)',
  marginBottom: theme.space.xxxl,
  '@media': {
    '(min-width: 960px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      borderRadius: theme.borderRadius.l,
    },
  },
});

export const altGrid = style({
  display: 'grid',
  gap: theme.space.l,
  gridTemplateColumns: 'repeat(auto-fit, minmax(64px, auto))',
  alignItems: 'center',
  maxWidth: '1280px',
  padding: theme.space.xl,
});

export const plainGrid = style({
  width: '100%',
  maxWidth: '960px',
  margin: `${theme.space.xl} auto`,
});

const segmentCommon = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: 'min(100vh, 768px)',
});

export const segment = style([
  segmentCommon,
  {
    paddingLeft: '16px',
    paddingRight: '16px',
  },
]);

export const mainSegment = style([
  segmentCommon,
  {
    minHeight: 'calc(100vh - 96px)',
    margin: 'auto',
    maxWidth: '960px',
  },
]);

export const smallText = style({
  marginBottom: '8px',
  textTransform: 'uppercase',
  fontSize: '14px',
  color: 'light-dark(#243343, #fff)',
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
  width: '2rem',
  height: '2rem',
  marginRight: theme.space.s,
  padding: theme.space.s,
  borderRadius: theme.borderRadius.m,
  backgroundColor: 'rgba(0, 0, 0, 0.04)',
});

export const portrait = style({
  width: '100%',
  height: 'auto',
  borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
  boxShadow: '5px 25px 40px rgba(0, 0, 0, 0.2)',
});
