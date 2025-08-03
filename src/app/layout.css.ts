import { globalStyle } from '@vanilla-extract/css';
import { theme } from '../utils/theme.css';

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  WebkitTextSizeAdjust: 'none',
  textSizeAdjust: '100%',
  WebkitFontSmoothing: 'antialiased',
  textRendering: 'optimizeLegibility',
});

globalStyle('body', {
  backgroundColor: 'light-dark(#e8eaee, #1a2332)',
  overflowX: 'hidden',
  margin: 0,
  lineHeight: theme.lineHeight.m,
  fontFamily: theme.fontFamily.primary,
  fontWeight: theme.fontWeight.normal,
  fontSize: theme.fontSize.m,
});

globalStyle('h1', {
  fontSize: theme.fontSize.xxxl,
});

globalStyle('h2', {
  fontSize: theme.fontSize.xxl,
});

globalStyle('h3', {
  fontSize: theme.fontSize.xl,
});

globalStyle('h1, h2, h3, h4, h5, p', {
  fontWeight: theme.fontWeight.normal,
  lineHeight: theme.lineHeight.s,
  marginTop: 0,
  marginBottom: 0,
});

globalStyle('strong', {
  fontWeight: theme.fontWeight.bold,
});

globalStyle('a, button', {
  all: 'unset',
  display: 'block',
  cursor: 'pointer',
});

globalStyle('a:focus, button:focus', {
  outline: 'none',
  boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
});

globalStyle('figure', {
  all: 'unset',
});
