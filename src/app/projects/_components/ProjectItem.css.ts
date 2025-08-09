import { style } from '@vanilla-extract/css';
import { theme } from '../../../utils/theme.css';

export const projectItem = style({
  display: 'grid',
  listStyleType: 'none',
  gap: theme.space.l,
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  alignItems: 'center',
  padding: '16px',
  backgroundColor: 'light-dark(#edf2f7, #2c3442)',
  '@media': {
    '(min-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      padding: '32px',
      borderRadius: theme.borderRadius.l,
    },
    '(min-width: 1024px)': {
      padding: '48px',
      gridTemplateAreas: '"illustration content"',
    },
  },
  selectors: {
    '&:nth-child(even)': {
      '@media': {
        '(min-width: 1024px)': {
          gridTemplateAreas: '"content illustration"',
        },
      },
    },
  },
});

export const projectLink = style({
  display: 'block',
  minWidth: '320px',
  '@media': {
    '(min-width: 1024px)': {
      gridArea: 'illustration',
    },
  },
});

export const projectContent = style({
  '@media': {
    '(min-width: 1024px)': {
      gridArea: 'content',
    },
  },
});

export const projectTitle = style({
  lineHeight: theme.lineHeight.xs,
  marginBottom: theme.space.m,
});
