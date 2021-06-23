// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import navigateTo from '../../services/navigation'
import { UPDATE_USER } from '../../actionTypes'
import { selectCurrentUser } from '../../selectors/users'
import UserForm from './UserForm'

import type { Connector } from 'react-redux'
import type { State, Dispatch } from '../../types'
import type { User, UserPayload as Payload } from '../../types/users'

type Props = {
  post: User,
  updatePost(payload: Payload): void
}

type OwnProps = {
  match: {
    params: {
      id: number
    }
  }
}

class EditUserPage extends Component<Props> {
  handleSubmit = (payload: Payload) => {
    const { id } = this.props.user
    payload = { ...payload, id }
    this.props.updateUser(payload)
    navigateTo('/admin/users')
  }

  render() {
    const { user } = this.props

    return (
      <div>
        <h2>Edit user</h2>
        {user && <UserForm user={user} onSubmit={this.handleSubmit} />}
      </div>
    )
  }
}

function mapStateToProps(state: State, ownProps: OwnProps) {
  const user = selectCurrentUser(state, Number(ownProps.match.params.id))
  return {
    user
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    updateUser: (payload: Payload) => dispatch({ type: UPDATE_USER, payload })
  }
}

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(EditUserPage)
