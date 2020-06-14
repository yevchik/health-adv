import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePageMobile from 'Pages/HomePage/HomePageMoble'
import { ABOUT_US, ARTICLE, DOCTORS, MEDIA_ARTICLE, MEDIA_CENTER, SPECIALS } from 'Pages/Routes'
import MediacenterMobile from 'Pages/Mediacenter/MediacenterMobile'
import NewsArticleMobile from 'Pages/NewsArticle/NewsArticleMobile'
import DoctorDetailsMobile from 'Pages/DoctorDetails/DoctorDetailsMobile'
import DoctorsMobile from 'Pages/Doctors/DoctorsMobile'
import AboutUsMobile from 'Pages/AboutUs/AboutUsMobile'
import ArticleMobile from 'Pages/Article/ArticleMobile'
import SpecialsMobile from 'Pages/Specials/SpecialsMobile'

export const HOME_PAGE = '/'

// TODO apply async import of page components to split the initial chunk

class RoutesMobile extends PureComponent {
  render () {
    return (
      <Switch>
        <Route exact path={HOME_PAGE} component={HomePageMobile} />
        <Route exact path={MEDIA_CENTER} component={MediacenterMobile} />
        <Route exact path={MEDIA_ARTICLE} component={NewsArticleMobile} />
        <Route exact path={DOCTORS} component={DoctorsMobile} />
        <Route exact path={`${DOCTORS}/:id`} component={DoctorDetailsMobile} />
        <Route exact path={ABOUT_US} component={AboutUsMobile} />
        <Route exact path={ARTICLE} component={ArticleMobile} />
        <Route exact path={SPECIALS} component={SpecialsMobile} />
      </Switch>
    )
  }
}

export default RoutesMobile
