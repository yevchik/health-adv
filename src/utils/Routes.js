// import React, { PureComponent } from 'react'
// import { Route, Switch } from 'react-router-dom'
// import HomePage from 'pages/home/index'
// import Mediacenter from 'pages/Mediacenter/Mediacenter'
// import NewsArticle from 'pages/NewsArticle/NewsArticle'
// import DoctorDetails from 'pages/DoctorDetails/DoctorDetails'
// import Doctors from 'pages/Doctors/Doctors'
// import AboutUs from 'pages/AboutUs/AboutUs'
// import Article from 'pages/Article/Article'
// import Specials from 'pages/Specials/Specials'
// import Special from 'pages/Special/Special'
// import AboutUsFAQ from 'pages/AboutUsFAQ/AboutUsFAQ'
// import AboutUsCertificates from 'pages/AboutUsCertificates/AboutUsCertificates'
// import AboutUsDocuments from 'pages/AboutUsDocuments/AboutUsDocuments'
// import AboutUsVacancies from 'pages/AboutUsVacancies/AboutUsVacancies'
// import ReviewsPage from 'pages/ReviewsPage/ReviewsPage'
// import Prices from 'pages/Prices/Prices'
// import Contacts from 'pages/Contacts/Contacts'
// import Page404 from 'pages/Page404/Page404'

export const HOME_PAGE = '/'
export const MEDIA_CENTER = '/media'
export const MEDIA_ARTICLE = '/media/article'
export const DOCTORS = '/doctors'
export const ABOUT_US = '/about'
export const ABOUT_FAQ = `${ABOUT_US}/faq`
export const ABOUT_CERTIFICATES = `${ABOUT_US}/certificates`
export const ABOUT_DOCUMENTS = `${ABOUT_US}/documents`
export const ABOUT_VACANCIES = `${ABOUT_US}/vacancies`
export const ARTICLE = '/article'
export const SPECIALS = '/specials'
export const REVIEWS = '/reviews'
export const PRICES = '/prices'
export const CONTACTS = '/contacts'

// // TODO apply async import of page components to split the initial chunk

// class Routes extends PureComponent {
//   render () {
//     return (
//       <Switch>
//         <Route exact path={HOME_PAGE} component={HomePage} />
//         <Route exact path={MEDIA_CENTER} component={Mediacenter} />
//         <Route exact path={MEDIA_ARTICLE} component={NewsArticle} />
//         <Route exact path={`${DOCTORS}/:id`} component={DoctorDetails} />
//         <Route exact path={DOCTORS} component={Doctors} />
//         <Route exact path={ABOUT_US} component={AboutUs} />
//         <Route exact path={ABOUT_FAQ} component={AboutUsFAQ} />
//         <Route exact path={ABOUT_CERTIFICATES} component={AboutUsCertificates} />
//         <Route exact path={ABOUT_DOCUMENTS} component={AboutUsDocuments} />
//         <Route exact path={ABOUT_VACANCIES} component={AboutUsVacancies} />
//         <Route exact path={ARTICLE} component={Article} />
//         <Route exact path={SPECIALS} component={Specials} />
//         <Route exact path={`${SPECIALS}/:id`} component={Special} />
//         <Route exact path={REVIEWS} component={ReviewsPage} />
//         <Route exact path={PRICES} component={Prices} />
//         <Route exact path={CONTACTS} component={Contacts} />
//         <Route component={Page404} />
//       </Switch>
//     )
//   }
// }

// export default Routes
