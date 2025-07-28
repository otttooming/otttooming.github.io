import { style } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const wrapper = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
  gap: theme.space.s,
  marginTop: theme.space.xl,
  marginBottom: theme.space.xl,
  maxWidth: '1280px',
});

export const item = style({
  position: 'relative',
  aspectRatio: '3 / 2',
  overflow: 'hidden',
  borderRadius: theme.borderRadius.s,
  selectors: {
    '&:hover': {
      boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
    },
    '&:focus': {
      boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
    },
  },
});
