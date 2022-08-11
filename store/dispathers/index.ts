import { AnyAction, Dispatch } from "redux";
import { MenuType } from "../reducers/menu.reducer";
import { ThemeColor } from "../reducers/theme.reducer";
import { themeColorChange } from "../actions/theme.action";
import { menuHoverChange, menuSelectedChange } from "../actions/menu.action";
import {
  closeDrawer,
  currentUserChange,
  currentUserExit,
  openDrawer,
} from "../actions/user.action";
import { UserDto } from "../../dtos/auth/user.dto";
import {
  saveEndpoints,
  saveParamValue,
  SaveParamValue,
} from "../actions/request-api.action";
import { EndpointDto } from "../../dtos/request/endpoint.dto";

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

    openDrawer: () => this.dispatch(openDrawer()),

    closeDrawer: () => this.dispatch(closeDrawer()),
  };

  public request = {
    saveEndpoints: (endpoints: EndpointDto[]) =>
      this.dispatch(saveEndpoints(endpoints)),

    saveParamValue: (payload: SaveParamValue) =>
      this.dispatch(saveParamValue(payload)),
  };
}
