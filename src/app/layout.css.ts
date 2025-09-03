import { globalStyle } from '@vanilla-extract/css';
import { theme } from '../utils/theme.css';

globalStyle(':where(a, button, figure, li, ol, ul)', {
  all: 'unset',
});

globalStyle('ol, ul', {
  display: 'block',
});

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  font: 'inherit',
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

globalStyle('h1, h2, h3, h4, h5, h6', {
  textWrap: 'balance',
});

globalStyle(':where(h1, h2, h3, h4, h5, h6) em', {
  display: 'block',
  textTransform: 'uppercase',
  fontSize: theme.fontSize.xs,
  lineHeight: theme.lineHeight.xs,
  color: 'light-dark(#243343, #fff)',
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

globalStyle('h1, h2, h3, h4, h5', {
  fontWeight: theme.fontWeight.bold,
  lineHeight: theme.lineHeight.m,
});

globalStyle(':where(h1, h2, h3, h4, h5):has(strong)', {
  fontWeight: theme.fontWeight.normal,
});

globalStyle('p', {
  fontWeight: theme.fontWeight.normal,
  lineHeight: theme.lineHeight.m,
});

globalStyle('p, figure, li', {
  /**
   * The number of paragraph orphans should be kept to a minimum
   */
  textWrap: 'pretty',
});

globalStyle('li', {
  display: 'block',
});

globalStyle(':where(ul:not([class])) > :where(li) + :where(li)', {
  marginTop: '4px',
});

globalStyle('strong', {
  fontWeight: theme.fontWeight.bold,
});

globalStyle('a, button', {
  display: 'block',
  cursor: 'pointer',
});

globalStyle('a:focus, button:focus', {
  outline: 'none',
  boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
});

globalStyle('img, svg', {
  display: 'block',
  objectFit: 'cover',
  maxWidth: '100%',
  height: 'auto',
});
