import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

const wrapperCommon = style({
  display: 'flex',
  justifyContent: 'center',
  borderRadius: theme.borderRadius.m,
  overflow: 'hidden',
  boxShadow: '5px 25px 40px rgba(0, 0, 0, 0.2)',
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

export const image = styleVariants({
  /**
   * Styles are already provided by the CSS reset
   */
  cover: [],
  contain: [
    {
      objectFit: 'contain',
    },
  ],
});
