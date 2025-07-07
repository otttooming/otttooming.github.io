import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const wrapper = style({
  marginTop: '160px',
  marginBottom: '64px',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#fff',
  borderRadius: theme.borderRadius.m,
  padding: '64px',
  maxWidth: '1280px',
});

export const content = style({
  position: 'relative',
  width: '100%',
  height: 340,
});

globalStyle(`${content} img`, {
  objectFit: 'contain',
});
