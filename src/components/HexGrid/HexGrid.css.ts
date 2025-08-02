import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const hex = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '16vw',
    height: '16vw',
    maxWidth: '8rem',
    maxHeight: '8rem',
    marginTop: '8px',
    transition: 'transform 200ms',
    clipPath:
      'polygon(45% 1.33975%, 46.5798% 0.60307%, 48.26352% 0.15192%, 50% 0%, 51.73648% 0.15192%, 53.4202% 0.60307%, 55% 1.33975%, 89.64102% 21.33975%, 91.06889% 22.33956%, 92.30146% 23.57212%, 93.30127% 25%, 94.03794% 26.5798%, 94.48909% 28.26352%, 94.64102% 30%, 94.64102% 70%, 94.48909% 71.73648%, 94.03794% 73.4202%, 93.30127% 75%, 92.30146% 76.42788%, 91.06889% 77.66044%, 89.64102% 78.66025%, 55% 98.66025%, 53.4202% 99.39693%, 51.73648% 99.84808%, 50% 100%, 48.26352% 99.84808%, 46.5798% 99.39693%, 45% 98.66025%, 10.35898% 78.66025%, 8.93111% 77.66044%, 7.69854% 76.42788%, 6.69873% 75%, 5.96206% 73.4202%, 5.51091% 71.73648%, 5.35898% 70%, 5.35898% 30%, 5.51091% 28.26352%, 5.96206% 26.5798%, 6.69873% 25%, 7.69854% 23.57212%, 8.93111% 22.33956%, 10.35898% 21.33975%)',
    '@media': {
      '(min-width: 960px)': {
        marginTop: 0,
      },
    },
    selectors: {
      '&:hover': {
        transform: 'scale3d(1.2, 1.2, 1.2)',
        zIndex: 1,
      },
    },
  },
  variants: {
    variant: {
      typescript: { backgroundColor: '#007acc' },
      redux: { backgroundColor: '#764abc' },
      gatsby: { backgroundColor: '#663399' },
      react: { backgroundColor: '#20232a' },
      graphql: { backgroundColor: 'rgba(221,23,151,0.75)' },
    },
  },
});

export const wrapper = style({
  margin: '128px auto',
  display: 'flex',
  flexDirection: 'column-reverse',
  '@media': {
    '(min-width: 960px)': {
      display: 'grid',
      gridTemplateAreas: `'. a1 a1 a2 a2 .' '. a1 a1 a2 a2 .' 'b1 b1 b2 b2 b3 b3' 'b1 b1 b2 b2 b3 b3' '. c1 c1 c2 c2 .' '. c1 c1 c2 c2 .'`,
    },
  },
});

export const item = style({
  position: 'relative',
  selectors: {
    '&:nth-of-type(1)': { gridArea: 'a1' },
    '&:nth-of-type(2)': { gridArea: 'a2' },
    '&:nth-of-type(3)': { gridArea: 'b1' },
    '&:nth-of-type(4)': { gridArea: 'b2' },
    '&:nth-of-type(5)': { gridArea: 'b3' },
    '&:nth-of-type(6)': { gridArea: 'c1' },
    '&:nth-of-type(7)': { gridArea: 'c2' },
  },
});

export const icon = style({
  width: '50%',
  height: '100%',
  color: '#fff',
});
