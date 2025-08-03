import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { theme } from '../../utils/theme.css';

const base = style({});

const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 250ms',
  userSelect: 'none',
  position: 'relative',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  width: 'auto',
  lineHeight: '1.2',
  borderRadius: '0.375rem',
  fontWeight: theme.fontWeight.semiBold,
  height: '1.5rem',
  minWidth: '1.5rem',
  fontSize: '0.75rem',
  paddingLeft: '0.5rem',
  paddingRight: '0.5rem',
  background: 'rgba(255, 255, 255, 0.08)',
  marginRight: theme.space.s,
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
  marginLeft: theme.space.s,
  width: '14px',
  height: '14px',
});
