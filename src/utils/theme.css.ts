import { createGlobalTheme } from '@vanilla-extract/css';

const space = {
  s: '0.5rem',
  m: '1rem',
  l: '1.5rem',
  xl: '2.5rem',
  xxl: '3rem',
} as const;

const borderRadius = {
  s: '0.25rem',
  m: '0.5rem',
} as const;

const lineHeight = {
  xs: '1.25',
  s: '1.375',
  m: '1.625',
} as const;

const remCalculator = (value: number) => `${value / 16}rem`;

const fontSize = {
  xs: remCalculator(14),
  s: remCalculator(16),
  m: remCalculator(18),
  l: remCalculator(20),
  xl: remCalculator(24),
  xxl: remCalculator(32),
  xxxl: remCalculator(40),
} as const;

const fontFamily = {
  primary: `'Montserrat', 'Helvetica Neue', Arial, sans-serif`,
} as const;

const fontWeight = {
  normal: '400',
  semiBold: '600',
  bold: '700',
} as const;

const color = {
  primary: '#3880ff',
  warning: '#10dc60',
  success: '#ffce00',
  danger: '#f04141',
} as const;

const textColor = {
  header: 'hsl(214, 35%, 15%)',
  primary: 'hsla(214, 40%, 16%, 0.94)',
  secondary: '#fff',
} as const;

const backgroundColor = {
  primary: '#1a2332',
  secondary: '#fff',
} as const;

export const theme = createGlobalTheme(':root', {
  space,
  borderRadius,
  lineHeight,
  fontSize,
  fontFamily,
  fontWeight,
  color,
  textColor,
  backgroundColor,
});
