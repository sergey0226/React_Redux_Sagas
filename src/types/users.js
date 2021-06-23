// @flow

export type User = {
  +id: number,
  +first: string,
  +last: string,
  +email: string,
  +phone: string,
  +location: string,
  +hobby: string
}

export type UserPayload = $Diff<User, { id: number }>

export type Users = Array<User>

export type UsersState = {
  +items: Users,
  +loading: boolean
}

export type UsersAction =
  | { type: 'FETCH_USERS' }
  | { type: 'FETCH_USERS_IF_NEEDED' }
  | { type: 'FETCH_USERS_PENDING' }
  | { type: 'FETCH_USERS_SUCCESS', payload: Users }
  | { type: 'FETCH_USERS_FAILURE' }
  | { type: 'DELETE_USER' }
  | { type: 'DELETE_USER_PENDING', id: number }
  | { type: 'DELETE_USER_SUCCESS', id: number }
  | { type: 'DELETE_USER_FAILURE' }
  | { type: 'CREATE_USER', payload: User }
  | { type: 'CREATE_USER_PENDING' }
  | { type: 'CREATE_USER_SUCCESS', payload: User }
  | { type: 'CREATE_USER_FAILURE' }
  | { type: 'UPDATE_USER', payload: User }
  | { type: 'UPDATE_USER_PENDING' }
  | { type: 'UPDATE_USER_SUCCESS', payload: User }
  | { type: 'UPDATE_POST_FAILURE' }
