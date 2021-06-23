// @flow

import React from 'react'
import Table from '@material-ui/core/Table'
import Typography from '@material-ui/core/Typography'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import type { Users } from '../../types/users'

type Props = {
  loading: boolean,
  users: Users,
  url: string,
  onEditUser: (id: number) => void,
  onDeleteUser: (id: number) => void
}

export default function UsersList(props: Props) {
  const { loading, users, url, onEditUser, onDeleteUser } = props

  if (loading) return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell><Typography variant="h4">ID</Typography></TableCell>
            <TableCell><Typography variant="h4">First</Typography></TableCell>
            <TableCell><Typography variant="h4">Last</Typography></TableCell>
            <TableCell><Typography variant="h4">Email</Typography></TableCell>
            <TableCell><Typography variant="h4">Phone</Typography></TableCell>
            <TableCell><Typography variant="h4">Location</Typography></TableCell>
            <TableCell><Typography variant="h4">Hobby</Typography></TableCell>
            <TableCell><Typography variant="h4">Actions</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Loading...</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>)
  if (users.length === 0) return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell><Typography variant="h4">ID</Typography></TableCell>
            <TableCell><Typography variant="h4">First</Typography></TableCell>
            <TableCell><Typography variant="h4">Last</Typography></TableCell>
            <TableCell><Typography variant="h4">Email</Typography></TableCell>
            <TableCell><Typography variant="h4">Phone</Typography></TableCell>
            <TableCell><Typography variant="h4">Location</Typography></TableCell>
            <TableCell><Typography variant="h4">Hobby</Typography></TableCell>
            <TableCell><Typography variant="h4">Actions</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>No Users</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>)

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell><Typography variant="h4">ID</Typography></TableCell>
            <TableCell><Typography variant="h4">First</Typography></TableCell>
            <TableCell><Typography variant="h4">Last</Typography></TableCell>
            <TableCell><Typography variant="h4">Email</Typography></TableCell>
            <TableCell><Typography variant="h4">Phone</Typography></TableCell>
            <TableCell><Typography variant="h4">Location</Typography></TableCell>
            <TableCell><Typography variant="h4">Hobby</Typography></TableCell>
            <TableCell><Typography variant="h4">Actions</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.first}</TableCell>
              <TableCell>{user.last}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.location}</TableCell>
              <TableCell>{user.hobby}</TableCell>
              <TableCell>
                <IconButton aria-label="edit" 
                  onClick={() => onEditUser(user._id)}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete"
                  onClick={() => onDeleteUser(user._id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
