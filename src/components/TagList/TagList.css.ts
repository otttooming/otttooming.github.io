import { style } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const wrapper = style({
  display: 'flex',
  gap: theme.space.s,
});
