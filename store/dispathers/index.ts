import { AnyAction, Dispatch } from "redux";
import { UserDto } from "../../dtos/user.dto";
import { MenuType } from "../reducers/menu.reducer";
import { ThemeColor } from "../reducers/theme.reducer";
import { themeColorChange } from "../actions/theme.action";
import { currentUserChange, currentUserExit } from "../actions/user.action";
import { menuHoverChange, menuSelectedChange } from "../actions/menu.action";

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

  public user = {
    currentUserChange: (user: UserDto) =>
      this.dispatch(currentUserChange(user)),

    currentUserExit: () => this.dispatch(currentUserExit()),
  };
}
