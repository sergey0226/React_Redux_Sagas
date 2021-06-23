// @flow

import { combineReducers } from 'redux'
import posts from './posts'
import users from './users'

const entitiesReducer = combineReducers({
  posts,
  users
})

const rootReducer = combineReducers({
  entities: entitiesReducer
})

export default rootReducer
