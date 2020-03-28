import {
  fontSize,
  lineHeight,
  borderRadius,
  space,
  setThemeVariable,
  fontFamily,
  fontWeight,
  color,
  textColor,
  backgroundColor,
} from "./customProperties"

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
}
