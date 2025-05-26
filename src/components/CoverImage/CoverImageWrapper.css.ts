import { style } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const wrapper = style({
  borderRadius: theme.borderRadius.m,
  overflow: 'hidden',
  boxShadow: '5px 25px 40px rgba(0, 0, 0, 0.2)',
  background: '#EDF2F7',
});
