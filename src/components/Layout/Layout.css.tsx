import { createGlobalVar, globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const detailHeader = style({
  display: 'grid',
  gap: theme.space.m,
  margin: 'auto',
  maxWidth: '960px',
  paddingLeft: theme.space.m,
  paddingRight: theme.space.m,
  marginTop: theme.space.xxxl,
});

export const hero = style({
  display: 'flex',
  justifyContent: 'center',
  maxWidth: '1024px',
  maxHeight: '70vh',
  margin: 'auto',
  marginTop: theme.space.xxxl,
  padding: '0 16px',
  position: 'relative',
});

createGlobalVar('content-max-width', {
  syntax: '<length>',
  inherits: false,
  initialValue: '960px',
});

createGlobalVar('breakout-max-width', {
  syntax: '<length>',
  inherits: false,
  initialValue: '1280px',
});

const paddingInlineVar = createGlobalVar('padding-inline', {
  syntax: '<length>',
  inherits: false,
  initialValue: '16px',
});

const breakOutSizeVar = createGlobalVar('breakout-size', {
  syntax: '<length-percentage>',
  inherits: false,
  /**
   * Must be a computationally independent value.
   * For any rem or calc() usage it must be re-declared in the vars declaration.
   */
  initialValue: '160px',
});

export const breakout = style({
  vars: {
    [paddingInlineVar]: theme.space.m,
    [breakOutSizeVar]:
      'calc((var(--breakout-max-width) - var(--content-max-width)) / 2)',
  },
  display: 'grid',
  gridTemplateColumns: `
    [full-width-start] minmax(var(--padding-inline), 1fr)
    [breakout-start] minmax(0, var(--breakout-size))
    [content-start] min(
      100% - (var(--padding-inline) * 2),
      var(--content-max-width)
    )
    [content-end]
    minmax(0, var(--breakout-size)) [breakout-end]
    minmax(var(--padding-inline), 1fr) [full-width-end]`,
});

globalStyle(`${breakout} > :not([data-layout-breakout], [data-layout-full])`, {
  gridColumn: 'content',
});

globalStyle(`${breakout} > [data-layout-breakout]`, {
  gridColumn: 'breakout',
});
