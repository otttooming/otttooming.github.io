import { globalStyle } from '@vanilla-extract/css';
import { theme } from '../utils/theme.css';

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  fontSize: '18px',
  WebkitTextSizeAdjust: 'none',
  textSizeAdjust: '100%',
  WebkitFontSmoothing: 'antialiased',
  textRendering: 'optimizeLegibility',
});

globalStyle('body', {
  background: 'none',
  overflowX: 'hidden',
  margin: 0,
  lineHeight: theme.lineHeight.m,
  fontFamily: theme.fontFamily.primary,
});

globalStyle('h1, h2, h3, h4, h5, p', {
  fontFamily: theme.fontFamily.primary,
  margin: 0,
});

globalStyle('strong', {
  fontWeight: theme.fontWeight.bold,
});
