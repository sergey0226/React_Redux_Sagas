// @flow

import type { UsersState as State, UsersAction as Action } from '../types/users'

function users(
  state: State = { items: [], loading: false },
  action: Action
): State {
  switch (action.type) {
  case 'FETCH_USERS_PENDING':
  case 'DELETE_USER_PENDING':
  case 'CREATE_USER_PENDING':
  case 'UPDATE_USER_PENDING':
    return {
      ...state,
      loading: true
    }
  case 'FETCH_USERS_SUCCESS':
    return {
      items: action.payload.reverse(),
      loading: false
    }
  case 'FETCH_USERS_FAILURE':
    return {
      items: [],
      loading: false
    }
  case 'DELETE_POST_SUCCESS': {
    const user_id = action.id
    return {
      items: state.items.filter(user => user.id !== user_id),
      loading: false
    }
  }
  case 'CREATE_USER_SUCCESS':
    return {
      items: [action.payload].concat(state.items),
      loading: false
    }
  case 'UPDATE_USER_SUCCESS': {
    const { id, ...rest } = action.payload

    return {
      items: state.items.map(user => {
        if (user.id === id) {
          return { ...user, ...rest }
        }
        return user
      }),
      loading: false
    }
  }
  case 'CREATE_USER_FAILURE':
  case 'DELETE_USER_FAILURE':
  case 'UPDATE_USER_FAILURE':
    return {
      ...state,
      loading: false
    }
  default:
    return state
  }
}

export default users
