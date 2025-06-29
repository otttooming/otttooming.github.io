import { style, globalStyle } from '@vanilla-extract/css';
import { theme } from '../../../utils/theme.css';

export const coverContainer = style({
  maxWidth: '1024px',
  margin: '80px auto 0',
  padding: '0 16px',
  position: 'relative',
});

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
  fontSize: '14px',
  alignItems: 'center',
  textDecoration: 'none',
});

export const externalLinkIcon = style({
  marginLeft: '8px',
  width: '16px',
});

export const header = style({
  marginTop: '80px',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '0 16px',
  maxWidth: '960px',
});

export const heading = style({
  fontWeight: theme.fontWeight.normal,
  marginTop: theme.space.s,
});

export const wrapper = style({
  marginTop: '80px',
  marginBottom: '80px',
});

globalStyle(`${wrapper} > *`, {
  maxWidth: '960px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '16px',
  paddingRight: '16px',
});
