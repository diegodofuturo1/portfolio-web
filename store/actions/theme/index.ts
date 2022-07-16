import { THEME_COLOR_CHANGE } from "..";

export const themeColorChange = (color: string) => ({
  type: THEME_COLOR_CHANGE,
  payload: color,
});
