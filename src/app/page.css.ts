import { style } from '@vanilla-extract/css';
import { theme } from '../utils/theme.css';

export const hero = style({
  display: 'grid',
  gap: theme.space.l,
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  alignItems: 'center',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  paddingLeft: 'clamp(1rem, 1rem + 4vw, 3rem)',
  paddingRight: 'clamp(1rem, 1rem + 4vw, 3rem)',
  backgroundColor: 'light-dark(#edf2f7, #2c3442)',
  marginBottom: theme.space.xxxl,
  borderRadius: theme.borderRadius.l,
});

export const altGrid = style({
  display: 'grid',
  gap: theme.space.l,
  gridTemplateColumns: 'repeat(auto-fit, minmax(64px, auto))',
  alignItems: 'center',
});

export const plainGrid = style({
  marginBlock: theme.space.xl,
});

export const segment = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: 'min(100vh, 768px)',
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
