import { createGlobalVar, globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../../utils/theme.css';

export const detailHeader = style({
  display: 'block',
});

export const hero = style({
  display: 'flex',
  justifyContent: 'center',
  maxHeight: '70vh',
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

globalStyle(`${breakout} > :where([data-layout-breakout]:not(:first-child))`, {
  marginBlockStart: theme.space.xl,
});

globalStyle(`${breakout} > :where([data-layout-breakout]:has(+ *))`, {
  marginBlockStart: theme.space.xl,
});

globalStyle(`${breakout} > :where(header:first-child, figure:first-child)`, {
  marginBlockStart: theme.space.xxxl,
});

globalStyle(`${breakout} > * + :where(header, figure)`, {
  marginBlockStart: theme.space.xxl,
});

globalStyle(
  `${breakout} > :where(article, section) + :where(article, section)`,
  {
    marginBlockStart: theme.space.xxl,
  },
);
