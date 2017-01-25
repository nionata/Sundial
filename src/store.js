import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import team from './testData/team'

const loggerMiddleware = createLogger()

const defaultState = {
  team
}

const store = createStore(rootReducer, defaultState, applyMiddleware(loggerMiddleware))

export default store