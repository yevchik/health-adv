import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from 'Pages/HomePage/HomePage'
import Mediacenter from 'Pages/Mediacenter/Mediacenter'
import NewsArticle from 'Pages/NewsArticle/NewsArticle'
import DoctorDetails from 'Pages/DoctorDetails/DoctorDetails'
import Doctors from 'Pages/Doctors/Doctors'
import AboutUs from 'Pages/AboutUs/AboutUs'
import Article from 'Pages/Article/Article'
import Specials from 'Pages/Specials/Specials'
import Special from 'Pages/Special/Special'

export const HOME_PAGE = '/'
export const MEDIA_CENTER = '/media'
export const MEDIA_ARTICLE = '/media/article'
export const DOCTORS = '/doctors'
export const ABOUT_US = '/about'
export const ARTICLE = '/article'
export const SPECIALS = '/specials'

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
        <Route exact path={ABOUT_US} component={AboutUs} />
        <Route exact path={ARTICLE} component={Article} />
        <Route exact path={SPECIALS} component={Specials} />
        <Route exact path={`${SPECIALS}/:id`} component={Special} />
      </Switch>
    )
  }
}

export default Routes
