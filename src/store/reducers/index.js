import { combineReducers } from 'redux'
import elasticAdaptive from 'store/reducers/elasticAdaptive'
import videoBannerReducer from 'store/reducers/videoBanner'
import uiReducer from 'store/reducers/ui'
import dataReducer from 'store/reducers/data'

export default combineReducers({
  elastic: elasticAdaptive,
  videoBanner: videoBannerReducer,
  ui: uiReducer,
  data: dataReducer
})