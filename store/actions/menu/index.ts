import { MENU_HOVER_CHANGE, MENU_SELECTED_CHANGE } from ".."

export const menuHoverChange = (hover: string) => ({
    type: MENU_HOVER_CHANGE,
    payload: hover
})

export const menuSelectedChange = (selected: string) => ({
    type: MENU_SELECTED_CHANGE,
    payload: selected
})