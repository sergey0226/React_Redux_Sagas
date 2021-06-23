import { takeLatest, put, call } from 'redux-saga/effects'
import { createtUserInAPI } from '../../services/users'
import navigateTo from '../../services/navigation'

function* createUSer(action) {
  yield put({ type: 'CREATE_USER_PENDING' })

  try {
    const newUser = yield call(createtUserInAPI, action.payload)
    yield put({ type: 'CREATE_USER_SUCCESS', payload: newUser })
    navigateTo('/admin/users')
  } catch (error) {
    yield put({ type: 'CREATE_USER_FAILURE' })
    console.error(error) // eslint-disable-line
    yield put(navigateTo('/error'))
  }
}

export default function* watchCreateUser() {
  yield takeLatest('CREATE_USER', createUSer)
}
