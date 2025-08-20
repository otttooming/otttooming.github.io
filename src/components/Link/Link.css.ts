import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { theme } from '../../utils/theme.css';

const base = style({});

const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.space.s,
  userSelect: 'none',
  whiteSpace: 'nowrap',
  lineHeight: theme.lineHeight.l,
  height: theme.lineHeight.l,
  borderRadius: theme.borderRadius.s,
  fontWeight: theme.fontWeight.semiBold,
  fontSize: theme.fontSize.xs,
  paddingLeft: theme.space.s,
  paddingRight: theme.space.s,
  background: 'rgba(255, 255, 255, 0.08)',
});

export const linkRecipe = recipe({
  variants: {
    variant: {
      base,
      button,
    },
  },
  defaultVariants: {
    variant: 'base',
  },
});

export const rightIcon = style({
  width: '14px',
  height: '14px',
});
