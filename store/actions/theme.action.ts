export const THEME_COLOR_CHANGE = "THEME_COLOR_CHANGE";

export const themeColorChange = (color: string) => ({
  type: THEME_COLOR_CHANGE,
  payload: color,
});
