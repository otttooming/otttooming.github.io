import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const wrapper = style({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#fff',
  borderRadius: theme.borderRadius.m,
  padding: '64px',
});

export const content = style({
  position: 'relative',
  width: '100%',
  height: 340,
});

globalStyle(`${content} img`, {
  objectFit: 'contain',
});
