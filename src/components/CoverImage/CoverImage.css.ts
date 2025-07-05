import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { theme } from '../../utils/theme.css';

export const wrapper = style({
  borderRadius: theme.borderRadius.m,
  overflow: 'hidden',
  boxShadow: '5px 25px 40px rgba(0, 0, 0, 0.2)',
  position: 'relative',
});

export const imageContainer = recipe({
  base: {
    position: 'relative',
    width: '100%',
    maxHeight: '70vh',
    aspectRatio: '3 /2',
    display: 'flex',
    alignItems: 'center',
  },
  variants: {
    fit: {
      cover: {
        width: '100%',
      },
      contain: {
        justifyContent: 'center',
      },
    },
  },
});

export const image = style({
  width: '100%',
  height: 'auto',
});
