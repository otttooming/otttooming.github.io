import { style } from '@vanilla-extract/css';
import { theme } from '../../../utils/theme.css';

export const wrapper = style({
  maxWidth: '960px',
  margin: '80px auto',
  paddingLeft: '16px',
  paddingRight: '16px',
});

export const coverWrapper = style({
  maxWidth: '1024px',
  margin: '80px auto 0',
  padding: '32px',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: theme.borderRadius.m,
  overflow: 'hidden',
  boxShadow: '5px 25px 40px rgba(0, 0, 0, 0.2)',
  background: '#EDF2F7',
});

export const coverImage = style({
  maxHeight: '100%',
  maxWidth: '600px',
  width: '100%',
  height: 'auto',
});
