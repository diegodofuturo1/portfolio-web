import { combineReducers } from "redux";
import menuReducer from "./menu.reducer";
import themeReducer from "./theme.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  menu: menuReducer,
  theme: themeReducer,
  user: userReducer,
});
