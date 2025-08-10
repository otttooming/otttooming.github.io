import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const wrapper = style({
  display: 'flex',
  justifyContent: 'center',
  borderRadius: theme.borderRadius.m,
  overflow: 'hidden',
  boxShadow: '5px 25px 40px rgba(0, 0, 0, 0.2)',
  position: 'relative',
  width: '100%',
  maxHeight: '70vh',
  aspectRatio: '3 /2',
});

const imageCommon = style({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
});

export const image = styleVariants({
  cover: [
    imageCommon,
    {
      objectFit: 'cover',
    },
  ],
  contain: [
    imageCommon,
    {
      objectFit: 'contain',
    },
  ],
});
