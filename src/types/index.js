// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import type { PostsState, PostsAction } from './posts'
import type { UsersState, UsersAction } from './users'

export type ReduxInitAction = { type: '@@INIT' }
export type Action = ReduxInitAction | PostsAction | UsersAction

export type State = {
  entities: {
    posts: PostsState
    users: UsersState
  }
}

export type Store = ReduxStore<State, Action>
export type Dispatch = ReduxDispatch<Action>
