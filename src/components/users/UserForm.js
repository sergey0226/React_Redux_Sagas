// @flow

import React, { Component } from 'react'
import Alert from '@material-ui/lab/Alert'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import type { User } from '../../types/users'

type Props = {
  user?: User,
  onSubmit: (payload: { title: string, body: string }) => void
}

type State = {
  first:string,
  last:string,
  email:string,
  phone:string,
  location: string,
  hobby: string,
  error: string
}

export default class UserForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    // this is a controlled form, so
    let first = ''
    let last = ''
    let email = ''
    let phone = ''
    let location = ''
    let hobby = ''

    this.props.user && ({ first, last, email, phone, location, hobby } = this.props.user)

    this.state = {
      first, 
      last, 
      email, 
      phone, 
      location, 
      hobby,
      error: ''
    }
  }

  handleFirstChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const first = e.currentTarget.value
    this.setState(() => ({ first }))
    console.log(this.state);  
  }

  handleLastChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const last = e.currentTarget.value
    this.setState(() => ({ last }))
  }

  handleEmailChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const email = e.currentTarget.value
    this.setState(() => ({ email }))
  }
  
  handlePhoneChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const phone = e.currentTarget.value
    this.setState(() => ({ phone }))
  }
  
  handleLocationChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const location = e.currentTarget.value
    this.setState(() => ({ location }))
  }
  
  handleHobbyChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const hobby = e.currentTarget.value
    this.setState(() => ({ hobby }))
  }
  // Just some simple validations
  // (for illustration purposes, atm)
  handleSubmit = (e: SyntheticEvent<*>) => {
    e.preventDefault()
    console.log('wonder')

    let { first, last, email, phone, location, hobby } = this.state
    first  = first.trim()
    last = last.trim()
    email = email.trim()
    phone = phone.trim()
    location = location.trim()
    hobby = hobby.trim()

    if (!first || !last || !email || !phone || !location || !hobby) {
      this.setState(() => ({
        error: 'Please provide All Datas for user information.'
      }))
      return
    }

    this.setState(() => ({ error: '' }))
    this.props.onSubmit({ first, last, email, phone, location, hobby })
  }

  render() {
    const {  first, last, email, phone, location, hobby, error } = this.state

    return (
      <div>
        {error && <Alert severity="error">{error}</Alert>}

        <form className="form">
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="First Name"
                value={first}
                fullWidth
                onChange={this.handleFirstChange}
                variant="outlined"
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Last Name"
                value={last}
                fullWidth
                onChange={this.handleLastChange}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Email"
                value={email}
                fullWidth
                onChange={this.handleEmailChange}
                variant="outlined"
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Phone"
                value={phone}
                fullWidth
                onChange={this.handlePhoneChange}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Location"
                value={location}
                fullWidth
                onChange={this.handleLocationChange}
                variant="outlined"
              />    
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Hobby"
                value={hobby}
                fullWidth
                onChange={this.handleHobbyChange}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container sytle={{ margin:'20px 40px' }}>
            <Button variant="contained" color="secondary" onClick={this.handleSubmit}>
              Create
            </Button>
          </Grid>
        </form>
      </div>
    )
  }
}
