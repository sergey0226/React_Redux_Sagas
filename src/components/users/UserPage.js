// @flow

import React from 'react'
import { connect } from 'react-redux'
// import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'

import { selectCurrentUser } from '../../selectors/users'

import type { Connector } from 'react-redux'
import type { State, Dispatch } from '../../types'
import type { User } from '../../types/users'

type Props = {
  user: User
}

type OwnProps = {
  match: {
    params: {
      id: number
    }
  }
}

function UserPage({ user }: Props) {
  return (
    <div>
      {user && (
        <div>
          <h2>{user.first+' '+user.last}</h2>
          <div>{user.email}</div>
          <div>{user.phone}</div>
          <div>{user.location}</div>
          <div>{user.hobby}</div>
        </div>
      )}
    </div>
  )
}

function mapStateToProps(state: State, ownProps: OwnProps) {
  console.log(ownProps);
  const post = selectCurrentUser(state, Number(ownProps.match.params.id))
  return {
    post
  }
}

// https://github.com/flowtype/flow-typed/issues/1269
// eslint-disable-next-line no-unused-vars
function mapDispatchToProps(dispatch: Dispatch) {
  return {

  }
}

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(UserPage)
