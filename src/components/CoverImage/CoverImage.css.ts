import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

const wrapperCommon = style({
  display: 'flex',
  justifyContent: 'center',
  borderRadius: theme.borderRadius.m,
  overflow: 'hidden',
  boxShadow: '5px 25px 40px rgba(0, 0, 0, 0.2)',
  position: 'relative',
});

export const wrapper = styleVariants({
  full: [wrapperCommon],
  contain: [
    wrapperCommon,
    {
      padding: theme.space.l,
      maxHeight: 480,
    },
  ],
});

const imageCommon = style({
  maxWidth: '100%',
  maxHeight: '100%',
  height: 'auto',
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
