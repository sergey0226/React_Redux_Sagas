import { all } from 'redux-saga/effects'

import { watchFetchPostsIfNeeded, watchFetchPosts } from './posts/fetch'
import watchDeletePost from './posts/delete'
import watchCreatePost from './posts/create'
import watchUpdatePost from './posts/update'

import { watchFetchUsersIfNeeded, watchFetchUsers } from './users/fetch'
import watchDeleteUser from './users/delete'
import watchCreateUser from './users/create'
import watchUpdateUser from './users/update'

export default function* rootSaga() {
  yield all([
    watchFetchPostsIfNeeded(),
    watchFetchPosts(),
    watchDeletePost(),
    watchCreatePost(),
    watchUpdatePost(),
    
    watchFetchUsersIfNeeded(),
    watchFetchUsers(),
    watchDeleteUser(),
    watchCreateUser(),
    watchUpdateUser()
  ])
}
