// @flow

import React from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import PostsPage from './posts/PostsPage'
import NewPostPage from './posts/NewPostPage'
import EditPostPage from './posts/EditPostPage'
import PostPage from './posts/PostPage'

import UsersPage from './users/UsersPage'
import NewUserPage from './users/NewUserPage'
import EditUserPage from './users/EditUserPage'
import UserPage from './users/UserPage'

import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

type Props = {
  match: {
    url: string
  }
}

export default function AdminPage({ match: { url } }: Props) {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar style={{ marginLeft:50 }}>
          <Typography variant="h2">
            IDEEZA Dashboard
          </Typography>
          <Link to={`${url}/users`} style={{ margin:10 }}>Users</Link>
          <Link to={`${url}/posts`} style={{ margin:10 }}>Posts</Link>
        </Toolbar>
      </AppBar>

      <div className="container">
        <Switch>
          <Route
            exact
            path={`${url}`}
            render={() => <Redirect to={`${url}/users`} />}
          />
          <Route exact path={`${url}/posts`} component={PostsPage} />
          <Route exact path={`${url}/posts/new`} component={NewPostPage} />
          <Route exact path={`${url}/posts/:id`} component={PostPage} />
          <Route
            exact
            path={`${url}/posts/:id/edit`}
            component={EditPostPage}
          />
          
          <Route exact path={`${url}/users`} component={UsersPage} />
          <Route exact path={`${url}/users/new`} component={NewUserPage} />
          <Route exact path={`${url}/users/:id`} component={UserPage} />
          <Route
            exact
            path={`${url}/users/:id/edit`}
            component={EditUserPage}
          />
          <Redirect to="/error" />
        </Switch>
      </div>
    </Container>
  )
}
