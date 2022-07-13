import { MENU_HOVER_CHANGE, MENU_SELECTED_CHANGE  } from "../../actions";

export type MenuType = 'about' | 'education' | 'experience' | ''

export interface PortfolioState {
    hover: MenuType,
    selected: MenuType
}

const initialState: PortfolioState = {
    hover: '',
    selected: ''
}

const reducer = (state: PortfolioState = initialState, action: any) => {
    switch (action.type) {
        case MENU_HOVER_CHANGE:
            return { ...state, hover: action.payload }
            
        case MENU_SELECTED_CHANGE:
            localStorage.setItem('selected', action.payload)
            return { ...state, selected: action.payload }
        default:
            return state
    }
}

export default reducer