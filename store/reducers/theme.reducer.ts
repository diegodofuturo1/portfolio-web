import { THEME_COLOR_CHANGE } from 'store/actions/theme.action';

export type ThemeColor =
  | 'red'
  | 'volcano'
  | 'orange'
  | 'gold'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'cyan'
  | 'blue'
  | 'geekblue'
  | 'purple'
  | 'magenta'
  | 'gray';

export interface ThemeState {
  color: ThemeColor;
}

const initialState: ThemeState = {
  color: 'gray',
};

const reducer = (state: ThemeState = initialState, action: any) => {
  switch (action.type) {
    case THEME_COLOR_CHANGE:
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export default reducer;
