import { takeLatest, put, call } from 'redux-saga/effects'
import { deleteUserFromApi } from '../../services/users'
import navigateTo from '../../services/navigation'

function* deleteUser(action) {
  console.log(action)
  yield put({ type: 'DELETE_USER_PENDING', id: action.id })

  try {
    console.log(action)
    const { count } = yield call(deleteUserFromApi, action.id)
    if (count !== 1) throw new Error('API delete request failed')
    yield put({ type: 'DELETE_USER_SUCCESS', id: action.id })
  } catch (error) {
    yield put({ type: 'DELETE_USER_FAILURE' })
    console.error(error) // eslint-disable-line
    yield put(navigateTo('/error'))
  }
}

export default function* watchDeleteUser() {
  yield takeLatest('DELETE_USER', deleteUser)
}
