import { style } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const projectItem = style({
  display: 'grid',
  listStyleType: 'none',
  gap: theme.space.l,
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  alignItems: 'center',
  padding: '16px',
  marginBottom: '32px',
  '@media': {
    '(min-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      padding: '32px',
      marginBottom: '64px',
      borderRadius: '16px',
    },
    '(min-width: 1024px)': {
      padding: '48px',
      marginBottom: '128px',
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
    '.dark &': {
      backgroundColor: '#2c3442',
    },
    '.light &': {
      backgroundColor: '#edf2f7',
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

export const companyLink = style({
  all: 'unset',
  cursor: 'pointer',
  display: 'block',
});

export const projectTitle = style({
  fontSize: theme.fontSize.xxxl,
  fontWeight: theme.fontWeight.normal,
  lineHeight: theme.lineHeight.xs,
  marginBottom: theme.space.m,
});

export const description = style({
  lineHeight: theme.lineHeight.m,
});
