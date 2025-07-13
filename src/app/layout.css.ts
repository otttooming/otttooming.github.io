import { createVar, globalStyle } from '@vanilla-extract/css';
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
  background: 'none',
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
  margin: 0,
});

globalStyle('strong', {
  fontWeight: theme.fontWeight.bold,
});

const backgroundColorVar = createVar();

globalStyle('.dark body', {
  vars: {
    [backgroundColorVar]: '#1a2332',
  },
  background: backgroundColorVar,
});

globalStyle('.light body', {
  vars: {
    [backgroundColorVar]: '#e8eaee',
  },
  background: backgroundColorVar,
});
