import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DesktopApp from 'App/DesktopApp'
import AdaptiveApp from 'App/AdaptiveApp'

const ViewSwitcher = () => {
  const type = useSelector(state => state.elastic.deviceType)

  return type === 'desktop'
    ? <DesktopApp />
    : <AdaptiveApp />
}

export default ViewSwitcher
