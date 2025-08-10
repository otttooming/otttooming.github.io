import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const detailHeader = style({
  display: 'grid',
  gap: theme.space.m,
  margin: 'auto',
  maxWidth: '960px',
  paddingLeft: theme.space.m,
  paddingRight: theme.space.m,
  marginTop: theme.space.xxl,
});

export const listHeader = style({
  display: 'grid',
  gap: theme.space.m,
  paddingLeft: theme.space.m,
  paddingRight: theme.space.m,
  maxWidth: '960px',
  marginTop: theme.space.xxxl,
});

export const listSection = style({
  display: 'grid',
  gap: theme.space.xxl,
  margin: 'auto',
  maxWidth: '1080px',
  paddingLeft: theme.space.m,
  paddingRight: theme.space.m,
  marginTop: theme.space.xxl,
});

export const detailSection = style({
  marginTop: theme.space.xxl,
});

globalStyle(`:where(${detailSection}) > *`, {
  maxWidth: '960px',
  margin: 'auto',
  paddingLeft: theme.space.m,
  paddingRight: theme.space.m,
});

export const hero = style({
  display: 'flex',
  justifyContent: 'center',
  maxWidth: '1024px',
  maxHeight: '70vh',
  margin: 'auto',
  padding: '0 16px',
  position: 'relative',
});
