import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from 'Pages/HomePage/HomePage'
import Mediacenter from 'Pages/Mediacenter/Mediacenter'

export const HOME_PAGE = '/'
export const MEDIA_CENTER = '/media'

// TODO apply async import of page components to split the initial chunk

class Routes extends PureComponent {
  render () {
    return (
      <Switch>
        <Route exact path={HOME_PAGE} component={HomePage} />
        <Route exact path={MEDIA_CENTER} component={Mediacenter} />
      </Switch>
    )
  }
}

export default Routes
