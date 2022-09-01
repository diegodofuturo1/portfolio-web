import { combineReducers } from 'redux';
import menuReducer, { MenuState } from './menu.reducer';
import requestReducer, { RequestApiState } from './request-api.reducer';
import themeReducer, { ThemeState } from './theme.reducer';
import userReducer, { UserState } from './user.reducer';
import portfolioReducer, { PortfolioState } from './portfolio.reducer';

export default combineReducers({
  menu: menuReducer,
  theme: themeReducer,
  user: userReducer,
  request: requestReducer,
  portfolio: portfolioReducer,
});

export type ApplicationState = {
  user: UserState;
  theme: ThemeState;
  menu: MenuState;
  request: RequestApiState;
  portfolio: PortfolioState;
};
