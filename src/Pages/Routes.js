import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from 'Pages/HomePage/HomePage'
import Mediacenter from 'Pages/Mediacenter/Mediacenter'
import NewsArticle from 'Pages/NewsArticle/NewsArticle'
import DoctorDetails from 'Pages/DoctorDetails/DoctorDetails'
import Doctors from 'Pages/Doctors/Doctors'

export const HOME_PAGE = '/'
export const MEDIA_CENTER = '/media'
export const MEDIA_ARTICLE = '/media/article'
export const DOCTORS = '/doctors'

// TODO apply async import of page components to split the initial chunk

class Routes extends PureComponent {
  render () {
    return (
      <Switch>
        <Route exact path={HOME_PAGE} component={HomePage} />
        <Route exact path={MEDIA_CENTER} component={Mediacenter} />
        <Route exact path={MEDIA_ARTICLE} component={NewsArticle} />
        <Route exact path={`${DOCTORS}/:id`} component={DoctorDetails} />
        <Route exact path={DOCTORS} component={Doctors} />
      </Switch>
    )
  }
}

export default Routes
