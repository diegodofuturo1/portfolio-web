import { AnyAction, Dispatch } from "redux"
import { menuHoverChange, menuSelectedChange, } from "../actions/menu"
import { MenuType } from "../reducers/menu"

export class Dispatcher {
    constructor(
        private readonly dispatch: Dispatch<AnyAction>
    ){ }

    public menu = {
        hoverChange: (hover: MenuType) => this.dispatch(menuHoverChange(hover)),
        selectedChange: (selected: MenuType) => this.dispatch(menuSelectedChange(selected)),
    }
}