import { style } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const footer = style({
  display: 'grid',
  justifyContent: 'center',
  textAlign: 'center',
  gap: theme.space.m,
  marginTop: '80px',
  marginBottom: '40px',
});

export const copyright = style({
  marginRight: '8px',
  transform: 'rotate(180deg)',
  display: 'inline-block',
});
