import { createStore } from 'redux'
import rootReducer from './reducers'
import team from './testData/team'

const defaultState = {
  team
}

const store = createStore(rootReducer, defaultState)

export default store