import { createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import reducers from './reducers'

const makeStore = () => createStore(reducers, composeWithDevTools())

export const storeWrapper = createWrapper(makeStore, { debug: false })