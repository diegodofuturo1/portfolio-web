import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducers from "./reducers";
import { UserState } from "./reducers/user.reducer";
import { ThemeState } from "./reducers/theme.reducer";
import { MenuState } from "./reducers/menu.reducer";

const makeStore = () => createStore(reducers, composeWithDevTools());

export const storeWrapper = createWrapper(makeStore, { debug: false });

export type PortifolioState = {
  user: UserState;
  theme: ThemeState;
  menu: MenuState;
};
