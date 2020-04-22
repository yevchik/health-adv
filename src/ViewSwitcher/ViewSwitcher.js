import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DesktopApp from 'App/DesktopApp'
import AdaptiveApp from 'App/AdaptiveApp'
import ElasticAdaptive from 'hoc/ElasticAdaptive'
import { isBrowser, isMobileOnly, isTablet } from 'react-device-detect'
import { setDeviceType } from 'store/actions'

const ViewSwitcher = () => {
  const type = useSelector(state => state.elastic.deviceType)
  const dispatch = useDispatch()

  // to avoid excessive render of wrong view (desktop for adaptive users) initial value of
  // state.elastic.deviceType is null and is defined before render anything at all
  useEffect(() => {
    const getDeviceType = () => {
      if (isBrowser) {
        dispatch(setDeviceType('desktop'))
      }

      if (isTablet) {
        dispatch(setDeviceType('tablet'))
      }

      if (isMobileOnly) {
        dispatch(setDeviceType('mobile'))
      }
    }

    getDeviceType()
  })

  if (!type) return null

  return (
    <ElasticAdaptive>
      {
        type === 'desktop'
          ? <DesktopApp />
          : <AdaptiveApp />
      }
    </ElasticAdaptive>
  )
}

export default ViewSwitcher
