// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import navigateTo from '../../services/navigation'
import { CREATE_USER } from '../../actionTypes'
import UserForm from './UserForm'

import type { Connector } from 'react-redux'
import type { Dispatch } from '../../types'
import type { UserPayload as Payload } from '../../types/users'

type Props = {
  dispatch: Dispatch,
  createPost(payload: Payload): void
}

class NewUserPage extends Component<Props> {
  handleSubmit = (payload: Payload) => {
    this.props.createUser(payload)
    navigateTo('/admin/users')
  }

  render() {
    return (
      <div>
        <h2>Create new user</h2>
        <UserForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    createUser: (payload: Payload) => dispatch({ type: CREATE_USER, payload })
  }
}

const connector: Connector<{}, Props> = connect(null, mapDispatchToProps)
export default connector(NewUserPage)
