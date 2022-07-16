import { combineReducers } from "redux";
import menuReducer from "./menu";
import themeReducer from "./theme";

export default combineReducers({
  menu: menuReducer,
  theme: themeReducer,
});
