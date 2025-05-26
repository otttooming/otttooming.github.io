import {
  backgroundColor,
  borderRadius,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  setThemeVariable,
  space,
  textColor,
} from './customProperties.css';

export const theme = {
  color: setThemeVariable(color),
  textColor: setThemeVariable(textColor),
  backgroundColor: setThemeVariable(backgroundColor),
  space: setThemeVariable(space),
  borderRadius: setThemeVariable(borderRadius),
  lineHeight: setThemeVariable(lineHeight),
  fontSize: setThemeVariable(fontSize),
  fontFamily: setThemeVariable(fontFamily),
  fontWeight: setThemeVariable(fontWeight),
};
