import { style } from '@vanilla-extract/css';
import { theme } from '../../../utils/theme.css';

export const projectLink = style({
  position: 'absolute',
  bottom: '-16px',
  left: '32px',
  display: 'inline-flex',
  background: '#edf2f7',
  color: 'rgb(26, 32, 44)',
  padding: '8px 16px',
  borderWidth: '1px',
  flex: '1',
  borderRadius: theme.borderRadius.m,
  alignItems: 'center',
  textDecoration: 'none',
});

export const externalLinkIcon = style({
  marginLeft: '8px',
  width: '16px',
});
