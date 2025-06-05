import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { theme } from '../utils/theme.css';

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

export const projectItem = recipe({
  base: {
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
    },
  },
  variants: {
    mode: {
      light: { backgroundColor: '#edf2f7' },
      dark: { backgroundColor: '#2c3442' },
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
  display: 'block',
});

export const projectTitle = style({
  marginTop: theme.space.s,
  fontWeight: theme.fontWeight.normal,
});
