// @flow
import type { State } from '../types'
import type { UsersState, Users, User } from '../types/users'

export function selectUsers(state: State): UsersState {
  return state.entities.users
}

export function selectCurrentUser(state: State, id: number): User | void {
  const items: Users = state.entities.users.items
  console.log(items, id)
  return items.find(item => item._id === id)
}
