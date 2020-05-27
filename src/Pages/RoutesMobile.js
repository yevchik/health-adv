import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePageMobile from 'Pages/HomePage/HomePageMoble'
import { DOCTORS, MEDIA_ARTICLE, MEDIA_CENTER } from 'Pages/Routes'
import MediacenterMobile from 'Pages/Mediacenter/MediacenterMobile'
import NewsArticleMobile from 'Pages/NewsArticle/NewsArticleMobile'
import DoctorDetailsMobile from 'Pages/DoctorDetails/DoctorDetailsMobile'

export const HOME_PAGE = '/'

// TODO apply async import of page components to split the initial chunk

class RoutesMobile extends PureComponent {
  render () {
    return (
      <Switch>
        <Route exact path={HOME_PAGE} component={HomePageMobile} />
        <Route exact path={MEDIA_CENTER} component={MediacenterMobile} />
        <Route exact path={MEDIA_ARTICLE} component={NewsArticleMobile} />
        <Route exact path={`${DOCTORS}/:id`} component={DoctorDetailsMobile} />
      </Switch>
    )
  }
}

export default RoutesMobile
