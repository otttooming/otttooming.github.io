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
  selectors: {
    '&:focus, &[data-focus]': {
      boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
    },
    '&[disabled], &[disabled]:focus, &[disabled]:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover, &[data-disabled], &[data-disabled]:focus, &[data-disabled]:hover':
      {
        opacity: 0.4,
        cursor: 'not-allowed',
        boxShadow: 'none',
      },
    '&:hover, &[data-hover]': {
      background: 'rgba(255, 255, 255, 0.16)',
    },
    '&:hover[disabled], &[data-hover][disabled], &:hover[disabled]:focus, &[data-hover][disabled]:focus, &:hover[disabled]:hover, &[data-hover][disabled]:hover, &:hover[aria-disabled=true], &[data-hover][aria-disabled=true], &:hover[aria-disabled=true]:focus, &[data-hover][aria-disabled=true]:focus, &:hover[aria-disabled=true]:hover, &[data-hover][aria-disabled=true]:hover, &:hover[data-disabled], &[data-hover][data-disabled], &:hover[data-disabled]:focus, &[data-hover][data-disabled]:focus, &:hover[data-disabled]:hover, &[data-hover][data-disabled]:hover':
      {
        background: 'rgba(255, 255, 255, 0.08)',
      },
    '&:active, &[data-active]': {
      background: 'rgba(255, 255, 255, 0.24)',
    },
  },
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
