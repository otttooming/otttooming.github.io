import { recipe } from '@vanilla-extract/recipes';

export const icon = recipe({
  base: {
    height: '16px',
    maxWidth: '100%',
  },
  variants: {
    size: {
      default: {},
      medium: {
        height: '24px',
      },
      large: {
        height: '32px',
      },
    },
  },
  defaultVariants: {
    size: 'default',
  },
});
