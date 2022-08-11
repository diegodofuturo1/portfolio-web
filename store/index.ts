import reducers from "./reducers";
import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const makeStore = () => createStore(reducers, composeWithDevTools());

export const storeWrapper = createWrapper(makeStore, { debug: false });
