import { AnyAction, Dispatch } from "redux";
import { menuHoverChange, menuSelectedChange } from "../actions/menu";
import { themeColorChange } from "../actions/theme";
import { MenuType } from "../reducers/menu";
import { ThemeColor } from "../reducers/theme";

export class Dispatcher {
  constructor(private readonly dispatch: Dispatch<AnyAction>) {}

  public menu = {
    hoverChange: (hover: MenuType) => this.dispatch(menuHoverChange(hover)),
    selectedChange: (selected: MenuType) =>
      this.dispatch(menuSelectedChange(selected)),
  };

  public theme = {
    colorChange: (color: ThemeColor) => this.dispatch(themeColorChange(color)),
  };
}
