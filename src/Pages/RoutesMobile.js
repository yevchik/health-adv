import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePageMobile from 'Pages/HomePage/HomePageMoble'
import {
  ABOUT_CERTIFICATES, ABOUT_DOCUMENTS,
  ABOUT_FAQ,
  ABOUT_US, ABOUT_VACANCIES,
  ARTICLE, CONTACTS,
  DOCTORS,
  MEDIA_ARTICLE,
  MEDIA_CENTER, PRICES, REVIEWS,
  SPECIALS
} from 'Pages/Routes'
import MediacenterMobile from 'Pages/Mediacenter/MediacenterMobile'
import NewsArticleMobile from 'Pages/NewsArticle/NewsArticleMobile'
import DoctorDetailsMobile from 'Pages/DoctorDetails/DoctorDetailsMobile'
import DoctorsMobile from 'Pages/Doctors/DoctorsMobile'
import AboutUsMobile from 'Pages/AboutUs/AboutUsMobile'
import ArticleMobile from 'Pages/Article/ArticleMobile'
import SpecialsMobile from 'Pages/Specials/SpecialsMobile'
import SpecialMobile from 'Pages/Special/SpecialMobile'
import AboutUsFAQMobile from 'Pages/AboutUsFAQ/AboutUsFAQMobile'
import AboutUsCertificatesMobile from 'Pages/AboutUsCertificates/AboutUsCertificatesMobile'
import AboutUsDocumentsMobile from 'Pages/AboutUsDocuments/AboutUsDocumentsMobile'
import AboutUsVacanciesMobile from 'Pages/AboutUsVacancies/AboutUsVacanciesMobile'
import ReviewsPageMobile from 'Pages/ReviewsPage/ReviewsPageMobile'
import PricesMobile from 'Pages/Prices/PricesMobile'
import ContactsMobile from 'Pages/Contacts/ContactsMobile'
import Page404Mobile from 'Pages/Page404/Page404Mobile'

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
        <Route exact path={ABOUT_FAQ} component={AboutUsFAQMobile} />
        <Route exact path={ABOUT_CERTIFICATES} component={AboutUsCertificatesMobile} />
        <Route exact path={ABOUT_DOCUMENTS} component={AboutUsDocumentsMobile} />
        <Route exact path={ABOUT_VACANCIES} component={AboutUsVacanciesMobile} />
        <Route exact path={ARTICLE} component={ArticleMobile} />
        <Route exact path={SPECIALS} component={SpecialsMobile} />
        <Route exact path={`${SPECIALS}/:id`} component={SpecialMobile} />
        <Route exact path={REVIEWS} component={ReviewsPageMobile} />
        <Route exact path={PRICES} component={PricesMobile} />
        <Route exact path={CONTACTS} component={ContactsMobile} />
        <Route component={Page404Mobile} />
      </Switch>
    )
  }
}

export default RoutesMobile
