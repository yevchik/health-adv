import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from 'Pages/HomePage/HomePage'

export const HOME_PAGE = '/'


class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path={HOME_PAGE} component={HomePage} />
      </Switch>
    )
  }
}

export default Routes
