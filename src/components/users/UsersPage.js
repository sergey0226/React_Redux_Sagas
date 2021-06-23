// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  FETCH_USERS_IF_NEEDED,
  FETCH_USERS,
  DELETE_USER,
} from '../../actionTypes'
import { selectUsers } from '../../selectors/users'
import navigateTo from '../../services/navigation'
import UsersHeading from './UsersHeading'
import UsersList from './UsersList'

import type { Dispatch, State } from '../../types'
import type { UsersState } from '../../types/users'
import type { Connector } from 'react-redux'

type Props = {
  users: UsersState,
  match: {
    url: string
  },
  fetchUsersIfNeeded(): void,
  deleteUser(id: number): void,
  fetchUsers(): void
}

class UsersPage extends Component<Props> {
  componentDidMount() {
    this.props.fetchUsersIfNeeded() 
  }

  handleDeleteUser = (id: number) => {
    if (window.confirm('Do you really want to delete this user?')) {
      console.log(id)
      this.props.deleteUser(id)
    }
  }

  handleNewUser = () => {
    const { url } = this.props.match
    navigateTo(`${url}/new`)
  }

  handleEditUser = (id: number) => {
    const { url } = this.props.match
    navigateTo(`${url}/${id}/edit`)
  }

  handleReloadUsers = () => {
    this.props.fetchUsers()
  }

  render() {
    const { items: users, loading } = this.props.users
    const { url } = this.props.match

    return (
      <div style={{ marginTop: 30 }}>
        <UsersList
          loading={loading}
          users={users}
          url={url}
          onEditUser={this.handleEditUser}
          onDeleteUser={this.handleDeleteUser}
        />
        <UsersHeading
          loading={loading}
          users={users}
          onNewUser={this.handleNewUser}
          onReloadUsers={this.handleReloadUsers}
        />
      </div>
    )
  }
}

function mapStateToProps(state: State) {
  return {
    users: selectUsers(state)
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchUsersIfNeeded: () => dispatch({ type: FETCH_USERS_IF_NEEDED }),
    deleteUser: (id: number) => dispatch({ type: DELETE_USER, id }),
    fetchUsers: () => dispatch({ type: FETCH_USERS })
  }
}

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(UsersPage)
