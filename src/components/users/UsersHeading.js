// @flow

import React from 'react'
import Button from '@material-ui/core/Button'

import type { Users } from '../../types/users'

type Props = {
  loading: boolean,
  users: Users,
  onNewUser: () => void,
  onReloadUsers: () => void
}

export default function UsersHeading({
  loading,
  users,
  onNewUser,
  onReloadUsers
}: Props) {
  return (
    <div>
      <div className="user_action_btn">
        <Button 
          variant="contained" 
          color="primary"
          style={{ margin: '10px 20px' }}
          onClick={onNewUser}
          disabled={loading}>
          New User
        </Button>
        <Button 
          className="space_left"
          variant="contained" 
          color="secondary"
          style={{ margin: '10px 20px' }}
          onClick={onReloadUsers}
          disabled={loading || users.length === 0}>
          Reload Users
        </Button>
      </div>
    </div>
  )
}
