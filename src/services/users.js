// @flow

import type { User, Users } from '../types/users'

import service from './Api'

export function fetchUsersFromApi(): Promise<User> | Promise<Users> {
  return service.get('/users')
}

export function deleteUserFromApi(id: number): Promise<number> {
  return service.delete(`/users/${id}`)
}

export function createtUserInAPI(payload: User): Promise<User> {
  return service.post('/users', payload)
}

export function updateUserInAPI(payload: User): Promise<User> {
  const { id, ...rest } = payload

  return service.patch(`/users/${id}`, rest)
}
