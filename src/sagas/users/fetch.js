import { takeLatest, put, call, select } from 'redux-saga/effects'
import { fetchUsersFromApi } from '../../services/users'
import navigateTo from '../../services/navigation'
import { selectUsers } from '../../selectors/users'

function* fetchUsers() {
  yield put({ type: 'FETCH_USERS_PENDING' })

  try {
    const usersFromApi = yield call(fetchUsersFromApi)
    yield put({ type: 'FETCH_USERS_SUCCESS', payload: usersFromApi })
  } catch (error) {
    yield put({ type: 'FETCH_USERS_FAILURE' })
    console.error(error) // eslint-disable-line
    yield put(navigateTo('/error'))
  }
}

export function* watchFetchUsers() {
  yield takeLatest('FETCH_USERS', fetchUsers)
}

function* fetchUsersIfNeeded() {
  const { items: users } = yield select(selectUsers)
  if (users.length === 0) {
    yield call(fetchUsers)
  }
}

export function* watchFetchUsersIfNeeded() {
  yield takeLatest('FETCH_USERS_IF_NEEDED', fetchUsersIfNeeded)
}
