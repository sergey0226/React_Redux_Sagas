import { takeLatest, put, call } from 'redux-saga/effects'
import { updateUserInAPI } from '../../services/users'
import navigateTo from '../../services/navigation'

function* updateUser(action) {
  yield put({ type: 'UPDATE_USER_PENDING' })

  try {
    const updatedUser = yield call(updateUserInAPI, action.payload)
    yield put({ type: 'UPDATE_USER_SUCCESS', payload: updatedUser })
    navigateTo('/admin/users')
  } catch (error) {
    yield put({ type: 'UPDATE_USER_FAILURE' })
    console.error(error) // eslint-disable-line
    yield put(navigateTo('/error'))
  }
}

export default function* watchUpdateUser() {
  yield takeLatest('UPDATE_POST', updateUser)
}
