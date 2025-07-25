import { globalStyle, style } from '@vanilla-extract/css';

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
  height: '2.5rem',
  minWidth: '2.5rem',
  fontSize: '1rem',
  padding: 0,
  background: 'light-dark( rgb(237, 242, 247), rgba(255, 255, 255, 0.08))',

  selectors: {
    '&:focus': {
      boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
    },
    '&:hover': {
      background: 'light-dark(rgb(226, 232, 240), rgba(255, 255, 255, 0.16))',
    },
  },
});
