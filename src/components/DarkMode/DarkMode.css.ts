import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const moonSun = style({
  position: 'relative',
  width: '24px',
  height: '24px',
  borderRadius: '50%',

  '::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    height: 'inherit',
    width: 'inherit',
    borderRadius: 'inherit',
    transition: 'background 0.3s',
  },

  '::after': {
    content: '""',
    width: '8px',
    height: '8px',
    borderRadius: 'inherit',
    margin: '-4px 0 0 -4px',
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
});

globalStyle(`.dark ${moonSun}`, {
  boxShadow: 'inset 32px -32px .1px 0 #000',
  transition: 'transform .3s ease .1s, box-shadow .2s ease 0s',
  transform: 'scale(0.5) rotate(0deg)',
});

globalStyle(`.dark ${moonSun}::before`, {
  background: '#fff',
  transition: 'background .3s ease .1s',
});

globalStyle(`.dark ${moonSun}::after`, {
  boxShadow:
    '0 -23px 0 #fff,0 23px 0 #fff,23px 0 0 #fff,-23px 0 0 #fff,15px 15px 0 #fff,-15px 15px 0 #fff,15px -15px 0 #fff,-15px -15px 0 #fff',
  transform: 'scale(1)',
  transition: 'transform .5s ease .15s',
});

globalStyle(`.light ${moonSun}`, {
  boxShadow: 'inset 10px -10px 0.1px 0 rgb(0, 0, 0)',
  transition: 'box-shadow 0.5s, transform 0.4s 0.1s',
  transform: 'scale(1) rotate(-2deg)',
});

globalStyle(`.light ${moonSun}::before`, {
  background: 'transparent',
});

globalStyle(`.light ${moonSun}::after`, {
  boxShadow:
    'rgb(0, 0, 0) 0 -23px 0, rgb(0, 0, 0) 0 23px 0, rgb(0, 0, 0) 23px 0 0, rgb(0, 0, 0) -23px 0 0, rgb(0, 0, 0) 15px 15px 0, rgb(0, 0, 0) -15px 15px 0, rgb(0, 0, 0) 15px -15px 0, rgb(0, 0, 0) -15px -15px 0',
  transform: 'scale(0)',
  transition: '0.3ms',
});

export const baseButton = style({
  all: 'unset',
  display: 'inline-flex',
  appearance: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 250ms',
  userSelect: 'none',
  position: 'relative',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  outline: 'none',
  width: 'auto',
  lineHeight: 1.2,
  borderRadius: '0.375rem',
  fontWeight: 600,
  height: '2.5rem',
  minWidth: '2.5rem',
  fontSize: '1rem',
  padding: 0,

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
  },
});

export const modeButton = style([baseButton]);

globalStyle(`.dark ${modeButton}`, {
  background: 'rgba(255, 255, 255, 0.08)',
});
globalStyle(`.dark ${modeButton}:hover, .dark ${modeButton}[data-hover]`, {
  background: 'rgba(255, 255, 255, 0.16)',
});
globalStyle(
  `.dark ${modeButton}:hover[disabled], .dark ${modeButton}[data-hover][disabled], .dark ${modeButton}:hover[disabled]:focus, .dark ${modeButton}[data-hover][disabled]:focus, .dark ${modeButton}:hover[disabled]:hover, .dark ${modeButton}[data-hover][disabled]:hover, .dark ${modeButton}:hover[aria-disabled=true], .dark ${modeButton}[data-hover][aria-disabled=true], .dark ${modeButton}:hover[aria-disabled=true]:focus, .dark ${modeButton}[data-hover][aria-disabled=true]:focus, .dark ${modeButton}:hover[aria-disabled=true]:hover, .dark ${modeButton}[data-hover][aria-disabled=true]:hover, .dark ${modeButton}:hover[data-disabled], .dark ${modeButton}[data-hover][data-disabled], .dark ${modeButton}:hover[data-disabled]:focus, .dark ${modeButton}[data-hover][data-disabled]:focus, .dark ${modeButton}:hover[data-disabled]:hover, .dark ${modeButton}[data-hover][data-disabled]:hover`,
  {
    background: 'rgba(255, 255, 255, 0.08)',
  },
);
globalStyle(`.dark ${modeButton}:active, .dark ${modeButton}[data-active]`, {
  background: 'rgba(255, 255, 255, 0.24)',
});

globalStyle(`.light ${modeButton}`, {
  background: 'rgb(237, 242, 247)',
});
globalStyle(`.light ${modeButton}:hover, .light ${modeButton}[data-hover]`, {
  background: 'rgb(226, 232, 240)',
});
globalStyle(`.light ${modeButton}:active, .light ${modeButton}[data-active]`, {
  background: 'rgb(203, 213, 224)',
});
