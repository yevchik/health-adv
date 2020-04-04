import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePageMobile from 'Pages/HomePage/HomePageMoble'

export const HOME_PAGE = '/'

// TODO apply async import of page components to split the initial chunk

class RoutesMobile extends PureComponent {
  render () {
    return (
      <Switch>
        <Route exact path={HOME_PAGE} component={HomePageMobile} />
      </Switch>
    )
  }
}

export default RoutesMobile
