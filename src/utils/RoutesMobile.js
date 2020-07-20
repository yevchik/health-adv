// import React, { PureComponent } from 'react'
// import { Route, Switch } from 'react-router-dom'
// import HomePageMobile from 'pages/home/index'
// import {
//   ABOUT_CERTIFICATES, ABOUT_DOCUMENTS,
//   ABOUT_FAQ,
//   ABOUT_US, ABOUT_VACANCIES,
//   ARTICLE, CONTACTS,
//   DOCTORS,
//   MEDIA_ARTICLE,
//   MEDIA_CENTER, PRICES, REVIEWS,
//   SPECIALS
// } from 'utils/Routes'
// import MediacenterMobile from 'pages/Mediacenter/MediacenterMobile'
// import NewsArticleMobile from 'pages/NewsArticle/NewsArticleMobile'
// import DoctorDetailsMobile from 'pages/DoctorDetails/DoctorDetailsMobile'
// import DoctorsMobile from 'pages/Doctors/DoctorsMobile'
// import AboutUsMobile from 'pages/AboutUs/AboutUsMobile'
// import ArticleMobile from 'pages/Article/ArticleMobile'
// import SpecialsMobile from 'pages/Specials/SpecialsMobile'
// import SpecialMobile from 'pages/Special/SpecialMobile'
// import AboutUsFAQMobile from 'pages/AboutUsFAQ/AboutUsFAQMobile'
// import AboutUsCertificatesMobile from 'pages/AboutUsCertificates/AboutUsCertificatesMobile'
// import AboutUsDocumentsMobile from 'pages/AboutUsDocuments/AboutUsDocumentsMobile'
// import AboutUsVacanciesMobile from 'pages/AboutUsVacancies/AboutUsVacanciesMobile'
// import ReviewsPageMobile from 'pages/ReviewsPage/ReviewsPageMobile'
// import PricesMobile from 'pages/Prices/PricesMobile'
// import ContactsMobile from 'pages/Contacts/ContactsMobile'
// import Page404Mobile from 'pages/Page404/Page404Mobile'

// export const HOME_PAGE = '/'

// // TODO apply async import of page components to split the initial chunk

// class RoutesMobile extends PureComponent {
//   render () {
//     return (
//       <Switch>
//         <Route exact path={HOME_PAGE} component={HomePageMobile} />
//         <Route exact path={MEDIA_CENTER} component={MediacenterMobile} />
//         <Route exact path={MEDIA_ARTICLE} component={NewsArticleMobile} />
//         <Route exact path={DOCTORS} component={DoctorsMobile} />
//         <Route exact path={`${DOCTORS}/:id`} component={DoctorDetailsMobile} />
//         <Route exact path={ABOUT_US} component={AboutUsMobile} />
//         <Route exact path={ABOUT_FAQ} component={AboutUsFAQMobile} />
//         <Route exact path={ABOUT_CERTIFICATES} component={AboutUsCertificatesMobile} />
//         <Route exact path={ABOUT_DOCUMENTS} component={AboutUsDocumentsMobile} />
//         <Route exact path={ABOUT_VACANCIES} component={AboutUsVacanciesMobile} />
//         <Route exact path={ARTICLE} component={ArticleMobile} />
//         <Route exact path={SPECIALS} component={SpecialsMobile} />
//         <Route exact path={`${SPECIALS}/:id`} component={SpecialMobile} />
//         <Route exact path={REVIEWS} component={ReviewsPageMobile} />
//         <Route exact path={PRICES} component={PricesMobile} />
//         <Route exact path={CONTACTS} component={ContactsMobile} />
//         <Route component={Page404Mobile} />
//       </Switch>
//     )
//   }
// }

// export default RoutesMobile
